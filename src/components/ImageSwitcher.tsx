import { useImage } from '@/contexts/ImageContext'
import { Image } from 'lucide-react'

export function ImageSwitcher() {
  const { currentImage, setImage, availableImages } = useImage()

  return (
    <div className="flex items-center gap-2">
      <Image className="h-4 w-4 text-foreground flex-shrink-0" />
      <div className="flex gap-1.5 flex-wrap max-w-[200px]">
        {availableImages.map((image) => (
          <button
            key={image.name}
            onClick={() => setImage(image.name)}
            className={`
              relative w-7 h-7 rounded border-2 transition-all flex-shrink-0 overflow-hidden
              ${currentImage.name === image.name 
                ? 'border-brand scale-110 shadow-sm' 
                : 'border-border hover:border-brand/50 hover:scale-105'
              }
            `}
            aria-label={`Foto ${image.label}`}
            title={image.label}
          >
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full object-cover"
            />
            {currentImage.name === image.name && (
              <span className="absolute inset-0 flex items-center justify-center bg-brand/20 backdrop-blur-sm">
                <span className="text-white text-[10px] font-bold drop-shadow-sm">✓</span>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

