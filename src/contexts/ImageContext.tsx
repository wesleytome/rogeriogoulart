import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import drRogerioImage from '@/images/dr-rogerio-goulart.png'
import rogerioImage from '@/images/rogerio-goulart.png'
import rogerio02Image from '@/images/rogerio-groulart-02.png'

export type ImageName =
  | 'dr-rogerio-goulart'
  | 'rogerio-goulart'
  | 'rogerio-groulart-02'

export interface ImageOption {
  name: ImageName
  label: string
  src: string
}

const DEFAULT_IMAGE_NAME: ImageName = 'dr-rogerio-goulart'
const IMAGE_SELECTION_VERSION_KEY = 'selectedImageVersion'
const CURRENT_IMAGE_SELECTION_VERSION = '2026-04-dr-rogerio-primary'

const images: Record<ImageName, ImageOption> = {
  'dr-rogerio-goulart': {
    name: 'dr-rogerio-goulart',
    label: 'Foto 1',
    src: drRogerioImage
  },
  'rogerio-goulart': {
    name: 'rogerio-goulart',
    label: 'Foto 2',
    src: rogerioImage
  },
  'rogerio-groulart-02': {
    name: 'rogerio-groulart-02',
    label: 'Foto 3',
    src: rogerio02Image
  }
}

const orderedImageNames: ImageName[] = [
  'dr-rogerio-goulart',
  'rogerio-goulart',
  'rogerio-groulart-02'
]

interface ImageContextType {
  currentImage: ImageOption
  setImage: (imageName: ImageName) => void
  availableImages: ImageOption[]
}

const ImageContext = createContext<ImageContextType | undefined>(undefined)

export function ImageProvider({ children }: { children: ReactNode }) {
  const [imageName, setImageName] = useState<ImageName>(() => {
    // Carrega do localStorage ou usa a nova imagem principal como padrão
    if (typeof window !== 'undefined') {
      const savedVersion = localStorage.getItem(IMAGE_SELECTION_VERSION_KEY)
      if (savedVersion !== CURRENT_IMAGE_SELECTION_VERSION) {
        localStorage.setItem(IMAGE_SELECTION_VERSION_KEY, CURRENT_IMAGE_SELECTION_VERSION)
        localStorage.setItem('selectedImage', DEFAULT_IMAGE_NAME)
        return DEFAULT_IMAGE_NAME
      }

      const saved = localStorage.getItem('selectedImage') as ImageName
      return saved && images[saved] ? saved : DEFAULT_IMAGE_NAME
    }
    return DEFAULT_IMAGE_NAME
  })

  const currentImage = images[imageName]

  const setImage = (name: ImageName) => {
    setImageName(name)
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedImage', name)
      localStorage.setItem(IMAGE_SELECTION_VERSION_KEY, CURRENT_IMAGE_SELECTION_VERSION)
    }
  }

  return (
    <ImageContext.Provider value={{ currentImage, setImage, availableImages: orderedImageNames.map((name) => images[name]) }}>
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
