import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    setSliderPosition(clampedPercentage)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  useEffect(() => {
    if (!isDragging) return

    const mouseMoveHandler = (e: MouseEvent) => {
      updateSliderPosition(e.clientX)
    }

    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault()
      updateSliderPosition(e.touches[0].clientX)
    }

    const mouseUpHandler = () => {
      setIsDragging(false)
    }

    const touchEndHandler = () => {
      setIsDragging(false)
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    document.addEventListener('touchmove', touchMoveHandler, { passive: false })
    document.addEventListener('touchend', touchEndHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
      document.removeEventListener('touchmove', touchMoveHandler)
      document.removeEventListener('touchend', touchEndHandler)
    }
  }, [isDragging])

  return (
    <div className="relative w-full h-full group">
      <div
        ref={containerRef}
        className="relative w-full h-[500px] overflow-hidden cursor-col-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Imagem "Depois" (fundo) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="Depois"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem "Antes" (sobreposta) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Antes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Linha divisória e controle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Círculo com setas */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="h-4 w-4 text-black absolute left-1" />
            <ChevronRight className="h-4 w-4 text-black absolute right-1" />
          </div>
        </div>

        {/* Textos "Antes" e "Depois" */}
        <div className="absolute bottom-6 left-6 z-20">
          <span 
            className="text-2xl font-normal"
            style={{ color: '#FFFFFF' }}
          >
            Antes
          </span>
        </div>
        <div className="absolute bottom-6 right-6 z-20">
          <span 
            className="text-2xl font-normal"
            style={{ color: '#FFFFFF' }}
          >
            Depois
          </span>
        </div>
      </div>
    </div>
  )
}
