import { useEffect, useMemo, useRef, useState } from 'react'
import type { ThemeColorKey } from '@/contexts/ThemeContext'
import { useTheme } from '@/contexts/ThemeContext'
import { useImage } from '@/contexts/ImageContext'
import { Button } from '@/components/ui/button'
import { Image as ImageIcon, Palette, X } from 'lucide-react'

const paletteSections: Array<{
  title: string
  fields: Array<{ key: ThemeColorKey; label: string }>
}> = [
  {
    title: 'Identidade',
    fields: [
      { key: 'brand', label: 'Marca' },
      { key: 'brandForeground', label: 'Texto da marca' },
      { key: 'secondary', label: 'Secundária' },
      { key: 'secondaryForeground', label: 'Texto da secundária' },
      { key: 'accent', label: 'Botão / destaque' },
      { key: 'accentForeground', label: 'Texto do botão' },
    ],
  },
  {
    title: 'Layout e Fundos',
    fields: [
      { key: 'shellBackground', label: 'Fundo Externo' },
      { key: 'background', label: 'Fundo Interno' },
      { key: 'muted', label: 'Fundo Alternado' },
      { key: 'card', label: 'Card' },
      { key: 'border', label: 'Borda' },
      { key: 'input', label: 'Campo' },
      { key: 'ring', label: 'Foco' },
    ],
  },
  {
    title: 'Textos',
    fields: [
      { key: 'foreground', label: 'Texto Principal' },
      { key: 'sectionLabel', label: 'Texto acima do título' },
      { key: 'sectionTitle', label: 'Título de seção' },
      { key: 'cardForeground', label: 'Texto do card' },
      { key: 'mutedForeground', label: 'Texto secundário' },
    ],
  },
  {
    title: 'Cards e botões',
    fields: [
      { key: 'cardHover', label: 'Hover do card' },
      { key: 'cardHoverForeground', label: 'Texto no hover' },
      { key: 'heroButton', label: 'Botão do hero' },
      { key: 'heroButtonForeground', label: 'Texto do botão do hero' },
      { key: 'cardButton', label: 'Botão do card / mapa' },
      { key: 'cardButtonForeground', label: 'Texto do botão do card' },
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
  const { currentImage, setImage, availableImages } = useImage()
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
    <div className="relative" ref={paletteEditorRef}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleCustomButtonClick}
        className="relative border-border bg-card/95 text-foreground hover:bg-card hover:text-brand shadow-sm"
        aria-label="Abrir editor de cores"
        title="Abrir editor de cores"
      >
        <Palette className="h-4 w-4" />
        <span
          className="absolute -right-1 -top-1 h-3 w-3 rounded-full border border-card shadow-sm"
          style={{ backgroundColor: currentTheme.colors.brand }}
        />
      </Button>

      {showPaletteEditor && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/10"
            onClick={() => setShowPaletteEditor(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-auto left-4 right-4 top-20 z-[70] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-border bg-card/98 p-4 shadow-2xl sm:top-24 md:left-auto md:w-[380px] lg:w-[430px]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Tema
                </div>
                <h3 className="text-base font-semibold text-foreground">Editor de paleta</h3>
                <p className="text-xs text-muted-foreground">
                  Um painel lateral único para ajustar fundo externo, títulos, cards e botões com prévia ao vivo.
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setShowPaletteEditor(false)}
                className="shrink-0 text-muted-foreground hover:text-foreground"
                aria-label="Fechar editor de paleta"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="mb-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Temas base
              </div>
              <div className="flex flex-wrap gap-2">
                {availableThemes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setTheme(theme.name)}
                    className={`
                      relative flex h-9 min-w-9 items-center justify-center rounded-lg border-2 px-2 transition-all
                      ${currentTheme.name === theme.name
                        ? 'border-brand shadow-sm'
                        : 'border-border hover:border-brand/50'
                      }
                    `}
                    style={{ backgroundColor: theme.colors.brand }}
                    aria-label={`Tema ${theme.label}`}
                    title={theme.label}
                  >
                    {currentTheme.name === theme.name && (
                      <span className="text-[10px] font-bold text-white drop-shadow-sm">✓</span>
                    )}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setTheme('custom')
                    setShowPaletteEditor(true)
                  }}
                  className={`
                    relative flex h-9 min-w-9 items-center justify-center rounded-lg border-2 px-2 transition-all
                    ${currentTheme.name === 'custom'
                      ? 'border-brand shadow-sm'
                      : 'border-border hover:border-brand/50'
                    }
                  `}
                  style={{ background: 'linear-gradient(135deg, #302D46 0%, #567C8D 55%, #D7C2A1 100%)' }}
                  aria-label="Tema personalizado"
                  title="Tema personalizado"
                >
                  {currentTheme.name === 'custom' && (
                    <span className="text-[10px] font-bold text-white drop-shadow-sm">✓</span>
                  )}
                </button>
              </div>
            </div>

            <div className="mb-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <ImageIcon className="h-3.5 w-3.5" />
                Fotos do hero
              </div>
              <div className="grid grid-cols-3 gap-3">
                {availableImages.map((image) => (
                  <button
                    key={image.name}
                    type="button"
                    onClick={() => setImage(image.name)}
                    className={`
                      relative overflow-hidden rounded-xl border-2 transition-all
                      ${currentImage.name === image.name
                        ? 'border-brand shadow-sm'
                        : 'border-border hover:border-brand/50'
                      }
                    `}
                    aria-label={`Selecionar ${image.label}`}
                    title={image.label}
                  >
                    <img
                      src={image.src}
                      alt={image.label}
                      className="h-24 w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/45 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-[1px]">
                      {image.label}
                    </div>
                    {currentImage.name === image.name && (
                      <span className="absolute inset-0 flex items-center justify-center bg-brand/20 backdrop-blur-[1px]">
                        <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-brand">
                          Ativa
                        </span>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
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

              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Exportar
                  </div>
                  <div className="flex items-center gap-2">
                    <Button type="button" size="sm" variant="outline" onClick={() => {
                      setTheme('default')
                      setShowPaletteEditor(false)
                    }}>
                      Voltar ao padrão
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
          </div>
        </>
      )}
    </div>
  )
}
