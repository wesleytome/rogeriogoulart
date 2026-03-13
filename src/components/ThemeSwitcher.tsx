import { useEffect, useMemo, useRef, useState } from 'react'
import type { ThemeColorKey } from '@/contexts/ThemeContext'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import { Palette } from 'lucide-react'

const paletteSections: Array<{
  title: string
  fields: Array<{ key: ThemeColorKey; label: string }>
}> = [
  {
    title: 'Marca e Acoes',
    fields: [
      { key: 'brand', label: 'Brand' },
      { key: 'brandForeground', label: 'Texto Brand' },
      { key: 'secondary', label: 'Secundaria' },
      { key: 'secondaryForeground', label: 'Texto Secundaria' },
      { key: 'accent', label: 'Botao / Accent' },
      { key: 'accentForeground', label: 'Texto Botao' },
    ],
  },
  {
    title: 'Fundos e Superficies',
    fields: [
      { key: 'background', label: 'Background' },
      { key: 'card', label: 'Card' },
      { key: 'muted', label: 'Muted' },
      { key: 'border', label: 'Border' },
      { key: 'input', label: 'Input' },
      { key: 'ring', label: 'Ring' },
    ],
  },
  {
    title: 'Textos',
    fields: [
      { key: 'foreground', label: 'Texto Principal' },
      { key: 'cardForeground', label: 'Texto Card' },
      { key: 'mutedForeground', label: 'Texto Muted' },
    ],
  },
]

export function ThemeSwitcher() {
  const {
    currentTheme,
    customPalette,
    setTheme,
    setCustomPaletteColor,
    loadThemeIntoCustomPalette,
    availableThemes,
  } = useTheme()
  const [showPaletteEditor, setShowPaletteEditor] = useState(false)
  const [copied, setCopied] = useState(false)
  const paletteEditorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (paletteEditorRef.current && !paletteEditorRef.current.contains(event.target as Node)) {
        setShowPaletteEditor(false)
      }
    }

    if (showPaletteEditor) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showPaletteEditor])

  const exportedPalette = useMemo(
    () =>
      JSON.stringify(
        {
          theme: 'custom',
          colors: customPalette,
        },
        null,
        2
      ),
    [customPalette]
  )

  const handleCustomButtonClick = () => {
    const nextOpenState = !showPaletteEditor
    setShowPaletteEditor(nextOpenState)
    setCopied(false)

    if (nextOpenState && currentTheme.name !== 'custom') {
      loadThemeIntoCustomPalette(currentTheme)
    }
  }

  const handleCopyPalette = async () => {
    try {
      await navigator.clipboard.writeText(exportedPalette)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const handlePaletteColorChange = (key: ThemeColorKey, value: string) => {
    setCopied(false)
    setCustomPaletteColor(key, value)
  }

  return (
    <div className="flex items-center gap-2 relative" ref={paletteEditorRef}>
      <Palette className="h-4 w-4 text-foreground flex-shrink-0" />
      <div className="flex gap-1.5 flex-wrap max-w-[220px]">
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

        <button
          onClick={handleCustomButtonClick}
          className={`
            relative w-7 h-7 rounded border-2 transition-all flex-shrink-0
            ${currentTheme.name === 'custom'
              ? 'border-brand scale-110 shadow-sm'
              : 'border-border hover:border-brand/50 hover:scale-105'
            }
          `}
          style={{ background: 'linear-gradient(135deg, #1A4262 0%, #567C8D 55%, #D7C2A1 100%)' }}
          aria-label="Editar paleta"
          title="Editar paleta completa"
        >
          {currentTheme.name === 'custom' && (
            <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold drop-shadow-sm">
              ✓
            </span>
          )}
        </button>
      </div>

      {showPaletteEditor && (
        <div className="absolute top-10 left-0 z-50 w-[360px] sm:w-[420px] max-h-[78vh] overflow-y-auto bg-card border border-border rounded-xl shadow-xl p-4 space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-foreground">Editor de paleta</h3>
            <p className="text-xs text-muted-foreground">
              Ajuste as cores do site, veja o preview ao vivo e copie o bloco abaixo para me enviar aqui.
            </p>
          </div>

          {paletteSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {section.title}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {section.fields.map((field) => (
                  <label key={field.key} className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2">
                    <input
                      type="color"
                      value={customPalette[field.key]}
                      onChange={(event) => handlePaletteColorChange(field.key, event.target.value)}
                      className="h-10 w-10 rounded border border-border cursor-pointer bg-transparent"
                      title={field.label}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-foreground">{field.label}</div>
                      <input
                        type="text"
                        value={customPalette[field.key]}
                        onChange={(event) => {
                          const value = event.target.value.toUpperCase()
                          if (/^#[0-9A-F]{6}$/i.test(value)) {
                            handlePaletteColorChange(field.key, value)
                          }
                        }}
                        className="mt-1 w-full bg-transparent text-xs font-mono text-muted-foreground outline-none"
                        placeholder="#000000"
                      />
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Exportar
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" size="sm" variant="outline" onClick={() => {
                  setTheme('teal')
                  setShowPaletteEditor(false)
                }}>
                  Voltar ao padrao
                </Button>
                <Button type="button" size="sm" onClick={handleCopyPalette}>
                  {copied ? 'Copiado' : 'Copiar bloco'}
                </Button>
              </div>
            </div>
            <textarea
              readOnly
              value={exportedPalette}
              className="min-h-[220px] w-full rounded-lg border border-border bg-background px-3 py-3 text-xs font-mono text-foreground resize-y"
              onFocus={(event) => event.currentTarget.select()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
