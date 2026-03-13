import { useState, useRef, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { Palette } from 'lucide-react'

export function ThemeSwitcher() {
  const { currentTheme, setTheme, setCustomColor, customColor, availableThemes } = useTheme()
  const [showColorPicker, setShowColorPicker] = useState(false)
  const colorPickerRef = useRef<HTMLDivElement>(null)

  // Fecha o color picker ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false)
      }
    }

    if (showColorPicker) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showColorPicker])

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value)
  }

  return (
    <div className="flex items-center gap-2 relative">
      <Palette className="h-4 w-4 text-foreground flex-shrink-0" />
      <div className="flex gap-1.5 flex-wrap max-w-[200px]">
        {availableThemes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setTheme(theme.name)}
            className={`
              relative w-7 h-7 rounded border-2 transition-all flex-shrink-0
              ${currentTheme.name === theme.name 
                ? 'border-brand scale-110 shadow-sm' 
                : 'border-border hover:border-brand/50 hover:scale-105'
              }
            `}
            style={{ backgroundColor: theme.colors.brand }}
            aria-label={`Tema ${theme.label}`}
            title={theme.label}
          >
            {currentTheme.name === theme.name && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold drop-shadow-sm">
                ✓
              </span>
            )}
          </button>
        ))}
        
        {/* Botão para abrir color picker customizado */}
        <div className="relative" ref={colorPickerRef}>
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className={`
              relative w-7 h-7 rounded border-2 transition-all flex-shrink-0
              ${currentTheme.name === 'custom'
                ? 'border-brand scale-110 shadow-sm' 
                : 'border-border hover:border-brand/50 hover:scale-105'
              }
              bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500
            `}
            aria-label="Cor personalizada"
            title="Escolher cor personalizada"
          >
            {currentTheme.name === 'custom' && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold drop-shadow-sm">
                ✓
              </span>
            )}
          </button>

          {/* Color Picker */}
          {showColorPicker && (
            <div className="absolute top-9 left-0 z-50 bg-card border border-border rounded-lg shadow-lg p-4 min-w-[280px]">
              <label className="block text-sm font-medium text-foreground mb-2">
                Escolha uma cor personalizada
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={customColor || currentTheme.colors.brand}
                  onChange={handleColorChange}
                  className="w-16 h-16 rounded border-2 border-border cursor-pointer"
                  title="Selecione uma cor"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    value={customColor || currentTheme.colors.brand}
                    onChange={(e) => {
                      if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                        setCustomColor(e.target.value)
                      }
                    }}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm font-mono"
                    placeholder="#000000"
                    pattern="^#[0-9A-F]{6}$"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Digite o código HEX
                  </p>
                </div>
              </div>
              {currentTheme.name === 'custom' && (
                <button
                  onClick={() => {
                    setTheme('teal')
                    setShowColorPicker(false)
                  }}
                  className="mt-3 text-xs text-muted-foreground hover:text-foreground"
                >
                  Voltar para temas pré-definidos
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

