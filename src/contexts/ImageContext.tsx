import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import rogerioImage from '@/images/rogerio-goulart.png'
import rogerio02Image from '@/images/rogerio-groulart-02.png'

export type ImageName = 'rogerio-goulart' | 'rogerio-groulart-02'

export interface ImageOption {
  name: ImageName
  label: string
  src: string
}

const images: Record<ImageName, ImageOption> = {
  'rogerio-goulart': {
    name: 'rogerio-goulart',
    label: 'Foto 1',
    src: rogerioImage
  },
  'rogerio-groulart-02': {
    name: 'rogerio-groulart-02',
    label: 'Foto 2',
    src: rogerio02Image
  }
}

interface ImageContextType {
  currentImage: ImageOption
  setImage: (imageName: ImageName) => void
  availableImages: ImageOption[]
}

const ImageContext = createContext<ImageContextType | undefined>(undefined)

export function ImageProvider({ children }: { children: ReactNode }) {
  const [imageName, setImageName] = useState<ImageName>(() => {
    // Carrega do localStorage ou usa 'rogerio-groulart-02' como padrão
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selectedImage') as ImageName
      return saved && images[saved] ? saved : 'rogerio-groulart-02'
    }
    return 'rogerio-groulart-02'
  })

  const currentImage = images[imageName]

  const setImage = (name: ImageName) => {
    setImageName(name)
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedImage', name)
    }
  }

  return (
    <ImageContext.Provider value={{ currentImage, setImage, availableImages: Object.values(images) }}>
      {children}
    </ImageContext.Provider>
  )
}

export function useImage() {
  const context = useContext(ImageContext)
  if (!context) {
    throw new Error('useImage must be used within ImageProvider')
  }
  return context
}
