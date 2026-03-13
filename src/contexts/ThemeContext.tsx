import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type ThemeName = 'teal' | 'pine' | 'sage' | 'sage-wedding' | 'sage-blue' | 'custom'
type PresetThemeName = Exclude<ThemeName, 'custom'>

export interface ThemeColors {
  brand: string
  brandForeground: string
  background: string
  foreground: string
  muted: string
  mutedForeground: string
  card: string
  cardForeground: string
  border: string
  input: string
  ring: string
  secondary?: string
  secondaryForeground?: string
  accent?: string
  accentForeground?: string
}

export type EditableThemeColors = Required<ThemeColors>
export type ThemeColorKey = keyof EditableThemeColors

export interface Theme {
  name: ThemeName
  label: string
  colors: ThemeColors
}

const DEFAULT_THEME_NAME: PresetThemeName = 'teal'
const THEME_STORAGE_VERSION_KEY = 'themeVersion'
const CUSTOM_THEME_PALETTE_KEY = 'customThemePalette'
const CURRENT_THEME_STORAGE_VERSION = '2026-03-full-palette-editor'

const EDITABLE_THEME_COLOR_KEYS: ThemeColorKey[] = [
  'brand',
  'brandForeground',
  'secondary',
  'secondaryForeground',
  'accent',
  'accentForeground',
  'background',
  'foreground',
  'muted',
  'mutedForeground',
  'card',
  'cardForeground',
  'border',
  'input',
  'ring',
]

const baseThemeColors = {
  background: '#F5EFEB',
  foreground: '#1A4262',
  muted: '#C8D9E6',
  mutedForeground: '#5F788B',
  card: '#FFFDF8',
  cardForeground: '#1A4262',
  border: '#D7DDE1',
  input: '#D7DDE1',
} as const

const themes: Record<PresetThemeName, Theme> = {
  teal: {
    name: 'teal',
    label: 'Navy Gold',
    colors: {
      brand: '#1A4262',
      brandForeground: '#FFFFFF',
      ...baseThemeColors,
      ring: '#1A4262',
      secondary: '#567C8D',
      secondaryForeground: '#FFFFFF',
      accent: '#D7C2A1',
      accentForeground: '#1A4262',
    },
  },
  pine: {
    name: 'pine',
    label: 'Pine & Jade',
    colors: {
      brand: '#17544D',
      brandForeground: '#FFFFFF',
      background: '#F7F5F4',
      foreground: '#212020',
      muted: '#E9E5DF',
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#CEDED5',
      input: '#CEDED5',
      ring: '#17544D',
      accent: '#2D6F63',
      accentForeground: '#FFFFFF',
    },
  },
  sage: {
    name: 'sage',
    label: 'Sage Green',
    colors: {
      brand: '#344E41',
      brandForeground: '#FFFFFF',
      background: '#DAD7CD',
      foreground: '#212020',
      muted: '#A3B18A',
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#A3B18A',
      input: '#A3B18A',
      ring: '#344E41',
      accent: '#3A5A40',
      accentForeground: '#FFFFFF',
    },
  },
  'sage-wedding': {
    name: 'sage-wedding',
    label: 'Sage Wedding',
    colors: {
      brand: '#406B5B',
      brandForeground: '#FFFFFF',
      background: '#E4D5C3',
      foreground: '#212020',
      muted: '#B89D83',
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#B89D83',
      input: '#B89D83',
      ring: '#406B5B',
      accent: '#91AE9E',
      accentForeground: '#FFFFFF',
    },
  },
  'sage-blue': {
    name: 'sage-blue',
    label: 'Sage & Blue',
    colors: {
      brand: '#2F3456',
      brandForeground: '#FFFFFF',
      background: '#E9E4DC',
      foreground: '#212020',
      muted: '#BAC6B8',
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#BAC6B8',
      input: '#BAC6B8',
      ring: '#2F3456',
      accent: '#8BA794',
      accentForeground: '#FFFFFF',
    },
  },
}

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (theme: ThemeName) => void
  setCustomColor: (color: string) => void
  customColor: string | null
  customPalette: EditableThemeColors
  setCustomPaletteColor: (key: ThemeColorKey, color: string) => void
  loadThemeIntoCustomPalette: (theme: Theme) => void
  availableThemes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

function normalizeThemeColors(colors: ThemeColors): EditableThemeColors {
  return {
    brand: colors.brand,
    brandForeground: colors.brandForeground,
    background: colors.background,
    foreground: colors.foreground,
    muted: colors.muted,
    mutedForeground: colors.mutedForeground,
    card: colors.card,
    cardForeground: colors.cardForeground,
    border: colors.border,
    input: colors.input,
    ring: colors.ring,
    secondary: colors.secondary || colors.brand,
    secondaryForeground: colors.secondaryForeground || colors.brandForeground,
    accent: colors.accent || colors.secondary || colors.brand,
    accentForeground: colors.accentForeground || colors.secondaryForeground || colors.brandForeground,
  }
}

function buildTheme(name: ThemeName, label: string, colors: ThemeColors): Theme {
  return {
    name,
    label,
    colors: normalizeThemeColors(colors),
  }
}

function getDefaultCustomPalette(): EditableThemeColors {
  return normalizeThemeColors(themes[DEFAULT_THEME_NAME].colors)
}

function getStoredCustomPalette(): EditableThemeColors | null {
  if (typeof window === 'undefined') return null

  const raw = localStorage.getItem(CUSTOM_THEME_PALETTE_KEY)
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw) as Partial<EditableThemeColors>
    const defaults = getDefaultCustomPalette()
    const nextPalette = { ...defaults }

    EDITABLE_THEME_COLOR_KEYS.forEach((key) => {
      const value = parsed[key]
      if (typeof value === 'string' && /^#[0-9A-F]{6}$/i.test(value)) {
        nextPalette[key] = value.toUpperCase()
      }
    })

    return nextPalette
  } catch {
    return null
  }
}

function generateCustomThemeFromBrand(brandColor: string): Theme {
  const rgb = hexToRgb(brandColor)
  if (!rgb) {
    return buildTheme('custom', 'Personalizado', getDefaultCustomPalette())
  }

  const { r, g, b } = rgb
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  const brandForeground = luminance > 0.5 ? '#212020' : '#FFFFFF'

  const darkerR = Math.max(0, r - 30)
  const darkerG = Math.max(0, g - 30)
  const darkerB = Math.max(0, b - 30)
  const accent = rgbToHex(darkerR, darkerG, darkerB)

  return buildTheme('custom', 'Personalizado', {
    brand: brandColor.toUpperCase(),
    brandForeground,
    ...baseThemeColors,
    ring: brandColor.toUpperCase(),
    secondary: accent,
    secondaryForeground: brandForeground,
    accent,
    accentForeground: brandForeground,
  })
}

function getInitialCustomPalette(): EditableThemeColors {
  const storedPalette = getStoredCustomPalette()
  if (storedPalette) return storedPalette

  if (typeof window !== 'undefined') {
    const legacyCustomColor = localStorage.getItem('customColor')
    if (legacyCustomColor && /^#[0-9A-F]{6}$/i.test(legacyCustomColor)) {
      return normalizeThemeColors(generateCustomThemeFromBrand(legacyCustomColor).colors)
    }
  }

  return getDefaultCustomPalette()
}

function getThemeStorageVersion(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(THEME_STORAGE_VERSION_KEY)
}

function persistThemeStorageVersion() {
  if (typeof window === 'undefined') return
  localStorage.setItem(THEME_STORAGE_VERSION_KEY, CURRENT_THEME_STORAGE_VERSION)
}

function persistCustomPalette(colors: EditableThemeColors) {
  if (typeof window === 'undefined') return
  localStorage.setItem(CUSTOM_THEME_PALETTE_KEY, JSON.stringify(colors))
  localStorage.setItem('customColor', colors.brand)
}

function getInitialThemeName(): ThemeName {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME_NAME
  }

  if (getThemeStorageVersion() !== CURRENT_THEME_STORAGE_VERSION) {
    localStorage.setItem('theme', DEFAULT_THEME_NAME)
    persistThemeStorageVersion()
    return DEFAULT_THEME_NAME
  }

  const saved = localStorage.getItem('theme') as ThemeName | null
  const hasCustomTheme = Boolean(localStorage.getItem(CUSTOM_THEME_PALETTE_KEY) || localStorage.getItem('customColor'))
  if (saved === 'custom' && hasCustomTheme) return 'custom'
  if (saved && saved in themes) return saved

  return DEFAULT_THEME_NAME
}

function toCssColorVariable(key: string) {
  return `--color-${key.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)}`
}

function applyTheme(theme: Theme) {
  const colors = normalizeThemeColors(theme.colors)
  const root = document.documentElement

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(toCssColorVariable(key), value)
  })

  const themeColorMeta = document.querySelector('meta[name="theme-color"]')
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', colors.brand)
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(getInitialThemeName)
  const [customPalette, setCustomPalette] = useState<EditableThemeColors>(getInitialCustomPalette)

  const currentTheme = themeName === 'custom'
    ? buildTheme('custom', 'Personalizado', customPalette)
    : buildTheme(
        themeName as Exclude<ThemeName, 'custom'>,
        themes[themeName as Exclude<ThemeName, 'custom'>].label,
        themes[themeName as Exclude<ThemeName, 'custom'>].colors
      )

  const setTheme = (name: ThemeName) => {
    setThemeName(name)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', name)
      persistThemeStorageVersion()
    }

    if (name === 'custom') {
      applyTheme(buildTheme('custom', 'Personalizado', customPalette))
      persistCustomPalette(customPalette)
      return
    }

    applyTheme(buildTheme(name, themes[name].label, themes[name].colors))
  }

  const setCustomColor = (color: string) => {
    const normalizedColor = color.toUpperCase()
    const generatedTheme = generateCustomThemeFromBrand(normalizedColor)
    const nextPalette = normalizeThemeColors(generatedTheme.colors)

    setCustomPalette(nextPalette)
    setThemeName('custom')

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'custom')
      persistThemeStorageVersion()
      persistCustomPalette(nextPalette)
    }

    applyTheme(generatedTheme)
  }

  const setCustomPaletteColor = (key: ThemeColorKey, color: string) => {
    const normalizedColor = color.toUpperCase()
    let nextPalette = customPalette

    setCustomPalette((previousPalette) => {
      nextPalette = {
        ...previousPalette,
        [key]: normalizedColor,
      }
      return nextPalette
    })

    setThemeName('custom')

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'custom')
      persistThemeStorageVersion()
      persistCustomPalette(nextPalette)
    }

    applyTheme(buildTheme('custom', 'Personalizado', nextPalette))
  }

  const loadThemeIntoCustomPalette = (theme: Theme) => {
    const nextPalette = normalizeThemeColors(theme.colors)
    setCustomPalette(nextPalette)
    setThemeName('custom')

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'custom')
      persistThemeStorageVersion()
      persistCustomPalette(nextPalette)
    }

    applyTheme(buildTheme('custom', 'Personalizado', nextPalette))
  }

  useEffect(() => {
    applyTheme(currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        setCustomColor,
        customColor: customPalette.brand,
        customPalette,
        setCustomPaletteColor,
        loadThemeIntoCustomPalette,
        availableThemes: Object.values(themes).map((theme) => buildTheme(theme.name, theme.label, theme.colors)),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
