import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type ThemeName = 'default' | 'blue' | 'graphite' | 'custom'
type PresetThemeName = Exclude<ThemeName, 'custom'>

export interface ThemeColors {
  brand: string
  brandForeground: string
  background: string
  foreground: string
  shellBackground?: string
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
  sectionLabel?: string
  sectionTitle?: string
  cardHover?: string
  cardHoverForeground?: string
  heroButton?: string
  heroButtonForeground?: string
  cardButton?: string
  cardButtonForeground?: string
}

export type EditableThemeColors = Required<ThemeColors>
export type ThemeColorKey = keyof EditableThemeColors

export interface Theme {
  name: ThemeName
  label: string
  colors: ThemeColors
}

const DEFAULT_THEME_NAME: PresetThemeName = 'default'
const THEME_STORAGE_VERSION_KEY = 'themeVersion'
const CUSTOM_THEME_PALETTE_KEY = 'customThemePalette'
const CURRENT_THEME_STORAGE_VERSION = '2026-04-default-theme-302d46'

const EDITABLE_THEME_COLOR_KEYS: ThemeColorKey[] = [
  'brand',
  'brandForeground',
  'secondary',
  'secondaryForeground',
  'accent',
  'accentForeground',
  'background',
  'foreground',
  'shellBackground',
  'muted',
  'mutedForeground',
  'card',
  'cardForeground',
  'sectionLabel',
  'sectionTitle',
  'cardHover',
  'cardHoverForeground',
  'heroButton',
  'heroButtonForeground',
  'cardButton',
  'cardButtonForeground',
  'border',
  'input',
  'ring',
]

const baseThemeColors = {
  background: '#F5EFEB',
  foreground: '#4E535F',
  shellBackground: '#302D46',
  muted: '#EFEFEF',
  mutedForeground: '#5F788B',
  card: '#FFFDF8',
  cardForeground: '#2B283F',
  sectionLabel: '#D7C2A1',
  sectionTitle: '#2B283F',
  cardHover: '#202E4B',
  cardHoverForeground: '#FFFFFF',
  heroButton: '#D7C2A1',
  heroButtonForeground: '#2B283F',
  cardButton: '#302D46',
  cardButtonForeground: '#FFFFFF',
  border: '#D7DDE1',
  input: '#D7DDE1',
} as const

const themes: Record<PresetThemeName, Theme> = {
  default: {
    name: 'default',
    label: 'Plum Gold',
    colors: {
      brand: '#302D46',
      brandForeground: '#FFFFFF',
      ...baseThemeColors,
      ring: '#2B283F',
      secondary: '#567C8D',
      secondaryForeground: '#FFFFFF',
      accent: '#D7C2A1',
      accentForeground: '#2B283F',
    },
  },
  blue: {
    name: 'blue',
    label: 'Navy Gold',
    colors: {
      brand: '#202E4B',
      brandForeground: '#FFFFFF',
      background: '#F5EFEB',
      foreground: '#4E535F',
      shellBackground: '#202E4B',
      muted: '#EFEFEF',
      mutedForeground: '#5F788B',
      card: '#FFFDF8',
      cardForeground: '#1A4262',
      sectionLabel: '#567C8D',
      sectionTitle: '#202E4B',
      cardHover: '#202E4B',
      cardHoverForeground: '#FFFFFF',
      heroButton: '#D7C2A1',
      heroButtonForeground: '#1A4262',
      cardButton: '#202E4B',
      cardButtonForeground: '#FFFFFF',
      border: '#D7DDE1',
      input: '#D7DDE1',
      ring: '#1A4262',
      secondary: '#567C8D',
      secondaryForeground: '#FFFFFF',
      accent: '#D7C2A1',
      accentForeground: '#1A4262',
    },
  },
  graphite: {
    name: 'graphite',
    label: 'Graphite Gold',
    colors: {
      brand: '#252429',
      brandForeground: '#FFFFFF',
      background: '#F4EFE7',
      foreground: '#4D515A',
      shellBackground: '#252429',
      muted: '#ECE9E4',
      mutedForeground: '#70757F',
      card: '#FCFAF6',
      cardForeground: '#252429',
      sectionLabel: '#8C816D',
      sectionTitle: '#252429',
      cardHover: '#38353D',
      cardHoverForeground: '#FFFFFF',
      heroButton: '#CBB189',
      heroButtonForeground: '#252429',
      cardButton: '#252429',
      cardButtonForeground: '#FFFFFF',
      border: '#D8D3CC',
      input: '#D8D3CC',
      ring: '#252429',
      secondary: '#6B7280',
      secondaryForeground: '#FFFFFF',
      accent: '#CBB189',
      accentForeground: '#252429',
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
  const secondary = colors.secondary || colors.brand
  const secondaryForeground = colors.secondaryForeground || colors.brandForeground
  const accent = colors.accent || secondary || colors.brand
  const accentForeground = colors.accentForeground || secondaryForeground || colors.brandForeground

  return {
    brand: colors.brand,
    brandForeground: colors.brandForeground,
    background: colors.background,
    foreground: colors.foreground,
    shellBackground: colors.shellBackground || colors.brand,
    muted: colors.muted,
    mutedForeground: colors.mutedForeground,
    card: colors.card,
    cardForeground: colors.cardForeground,
    sectionLabel: colors.sectionLabel || secondary,
    sectionTitle: colors.sectionTitle || colors.brand || colors.foreground,
    cardHover: colors.cardHover || colors.brand,
    cardHoverForeground: colors.cardHoverForeground || colors.brandForeground,
    heroButton: colors.heroButton || accent,
    heroButtonForeground: colors.heroButtonForeground || accentForeground,
    cardButton: colors.cardButton || colors.brand,
    cardButtonForeground: colors.cardButtonForeground || colors.brandForeground,
    border: colors.border,
    input: colors.input,
    ring: colors.ring,
    secondary,
    secondaryForeground,
    accent,
    accentForeground,
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
