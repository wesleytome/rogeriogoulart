import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export type ThemeName = 'teal' | 'pine' | 'sage' | 'sage-wedding' | 'sage-blue' | 'custom'

export interface Theme {
  name: ThemeName
  label: string
  colors: {
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
    accent?: string
    accentForeground?: string
  }
}

const themes: Record<Exclude<ThemeName, 'custom'>, Theme> = {
  teal: {
    name: 'teal',
    label: 'Verde Água',
    colors: {
      brand: '#7FC2B4',
      brandForeground: '#FFFFFF',
      background: '#FAFAFA',
      foreground: '#212020',
      muted: '#F7F7F7',
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#E5E7EB',
      input: '#E5E7EB',
      ring: '#7FC2B4',
    }
  },
  pine: {
    name: 'pine',
    label: 'Pine & Jade',
    colors: {
      brand: '#17544D', // PINE
      brandForeground: '#FFFFFF',
      background: '#F7F5F4', // STONE
      foreground: '#212020',
      muted: '#E9E5DF', // SAND
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#CEDED5', // MIST
      input: '#CEDED5', // MIST
      ring: '#17544D', // PINE
      accent: '#2D6F63', // JADE
      accentForeground: '#FFFFFF',
    }
  },
  sage: {
    name: 'sage',
    label: 'Sage Green',
    colors: {
      brand: '#344E41', // Brunswick Green
      brandForeground: '#FFFFFF',
      background: '#DAD7CD', // Timberwolf
      foreground: '#212020',
      muted: '#A3B18A', // Sage
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#A3B18A', // Sage
      input: '#A3B18A', // Sage
      ring: '#344E41', // Brunswick Green
      accent: '#3A5A40', // Hunter Green
      accentForeground: '#FFFFFF',
    }
  },
  'sage-wedding': {
    name: 'sage-wedding',
    label: 'Sage Wedding',
    colors: {
      brand: '#406B5B', // Hooker's Green
      brandForeground: '#FFFFFF',
      background: '#E4D5C3', // Almond
      foreground: '#212020',
      muted: '#B89D83', // Lion
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#B89D83', // Lion
      input: '#B89D83', // Lion
      ring: '#406B5B', // Hooker's Green
      accent: '#91AE9E', // Cambridge Blue
      accentForeground: '#FFFFFF',
    }
  },
  'sage-blue': {
    name: 'sage-blue',
    label: 'Sage & Blue',
    colors: {
      brand: '#2F3456', // Space Cadet
      brandForeground: '#FFFFFF',
      background: '#E9E4DC', // Alabaster
      foreground: '#212020',
      muted: '#BAC6B8', // Ash Gray
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#BAC6B8', // Ash Gray
      input: '#BAC6B8', // Ash Gray
      ring: '#2F3456', // Space Cadet
      accent: '#8BA794', // Cambridge Blue
      accentForeground: '#FFFFFF',
    }
  }
}

interface ThemeContextType {
  currentTheme: Theme
  setTheme: (theme: ThemeName) => void
  setCustomColor: (color: string) => void
  customColor: string | null
  availableThemes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * Converte hex para RGB
 */
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

/**
 * Converte RGB para hex
 */
function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

/**
 * Gera cores derivadas de uma cor base para o tema customizado
 */
function generateCustomTheme(brandColor: string): Theme {
  const rgb = hexToRgb(brandColor)
  if (!rgb) {
    // Fallback para teal se a cor for inválida
    return themes.teal
  }

  const { r, g, b } = rgb

  // Calcula luminosidade para determinar se usa texto branco ou preto
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  const brandForeground = luminance > 0.5 ? '#212020' : '#FFFFFF'

  // Gera cor mais escura para accent
  const darkerR = Math.max(0, r - 30)
  const darkerG = Math.max(0, g - 30)
  const darkerB = Math.max(0, b - 30)
  const accent = rgbToHex(darkerR, darkerG, darkerB)

  return {
    name: 'custom',
    label: 'Personalizado',
    colors: {
      brand: brandColor,
      brandForeground,
      background: '#FAFAFA',
      foreground: '#212020',
      muted: '#F7F7F7',
      mutedForeground: '#6B7280',
      card: '#FFFFFF',
      cardForeground: '#212020',
      border: '#E5E7EB',
      input: '#E5E7EB',
      ring: brandColor,
      accent,
      accentForeground: brandForeground,
    }
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--color-${key}`, value)
    }
  })
  
  // Atualiza secondary e accent se disponíveis
  if (theme.colors.accent) {
    root.style.setProperty('--color-secondary', theme.colors.accent)
    root.style.setProperty('--color-accent', theme.colors.accent)
  } else {
    root.style.setProperty('--color-secondary', theme.colors.brand)
    root.style.setProperty('--color-accent', theme.colors.brand)
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    // Carrega do localStorage ou usa 'teal' como padrão
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as ThemeName
      if (saved === 'custom') return 'custom'
      if (saved && saved in themes) return saved
    }
    return 'teal'
  })

  const [customColor, setCustomColorState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('customColor')
    }
    return null
  })

  const currentTheme = themeName === 'custom' && customColor
    ? generateCustomTheme(customColor)
    : themes[themeName as Exclude<ThemeName, 'custom'>]

  const setTheme = (name: ThemeName) => {
    setThemeName(name)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', name)
    }
    if (name === 'custom' && customColor) {
      applyTheme(generateCustomTheme(customColor))
    } else if (name !== 'custom') {
      applyTheme(themes[name])
    }
  }

  const setCustomColor = (color: string) => {
    setCustomColorState(color)
    setThemeName('custom')
    if (typeof window !== 'undefined') {
      localStorage.setItem('customColor', color)
      localStorage.setItem('theme', 'custom')
    }
    applyTheme(generateCustomTheme(color))
  }

  useEffect(() => {
    if (themeName === 'custom' && customColor) {
      applyTheme(generateCustomTheme(customColor))
    } else {
      applyTheme(currentTheme)
    }
  }, [currentTheme, themeName, customColor])

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setTheme, 
      setCustomColor,
      customColor,
      availableThemes: Object.values(themes) 
    }}>
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

