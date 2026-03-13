import { useEffect } from 'react'
import { businessInfo } from '@/data/businessInfo'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  keywords?: string
  author?: string
  robots?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogImageWidth?: number
  ogImageHeight?: number
  ogImageType?: string
  ogImageAlt?: string
  ogType?: 'website' | 'article' | 'profile'
  ogUrl?: string
  ogSiteName?: string
  ogLocale?: string
  ogDeterminer?: 'a' | 'an' | 'the' | '' | 'auto'
  ogLocaleAlternate?: string[]
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterImageAlt?: string
  twitterSite?: string
  twitterCreator?: string
  ogImageSquare?: string // Imagem 1:1 para uso em Twitter summary card e outras plataformas
}

/**
 * Função auxiliar para construir URL completa
 */
const getFullUrl = (url?: string): string => {
  if (!url) return window.location.href
  if (url.startsWith('http')) return url
  const origin = window.location.origin
  const path = url.startsWith('/') ? url : `/${url}`
  return `${origin}${path}`
}

/**
 * Função auxiliar para atualizar ou criar meta tag
 */
const updateOrCreateMeta = (attribute: 'name' | 'property', value: string, content: string) => {
  const selector = attribute === 'name' 
    ? `meta[${attribute}="${value}"]`
    : `meta[${attribute}="${value}"]`
  
  let meta = document.querySelector(selector) as HTMLMetaElement
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, value)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

/**
 * Função auxiliar para atualizar ou criar link tag
 */
const updateOrCreateLink = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function SEO({
  title,
  description,
  canonical,
  keywords,
  author,
  robots = 'index, follow',
  ogTitle,
  ogDescription,
  ogImage,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogImageType = 'image/png',
  ogImageAlt,
  ogType = 'website',
  ogUrl,
  ogSiteName,
  ogLocale = 'pt_BR',
  ogDeterminer = 'auto',
  ogLocaleAlternate,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  twitterSite,
  twitterCreator,
  ogImageSquare,
}: SEOProps) {
  useEffect(() => {
    const currentUrl = window.location.href

    // ============================================
    // TAGS BÁSICAS DE SEO
    // ============================================

    // Title
    if (title) {
      document.title = title
    }

    // Description
    if (description) {
      updateOrCreateMeta('name', 'description', description)
    }

    // Keywords
    if (keywords) {
      updateOrCreateMeta('name', 'keywords', keywords)
    }

    // Author
    if (author) {
      updateOrCreateMeta('name', 'author', author)
    } else {
      // Usar nome do médico como padrão
      updateOrCreateMeta('name', 'author', businessInfo.doctorName)
    }

    // Robots
    updateOrCreateMeta('name', 'robots', robots)

    // Canonical URL
    if (canonical) {
      const fullCanonicalUrl = getFullUrl(canonical)
      updateOrCreateLink('canonical', fullCanonicalUrl)
    } else {
      // Usar URL atual como padrão
      updateOrCreateLink('canonical', currentUrl)
    }

    // ============================================
    // OPEN GRAPH TAGS (Facebook, LinkedIn, etc)
    // ============================================

    // og:title
    if (ogTitle) {
      updateOrCreateMeta('property', 'og:title', ogTitle)
    } else if (title) {
      updateOrCreateMeta('property', 'og:title', title)
    }

    // og:description
    if (ogDescription) {
      updateOrCreateMeta('property', 'og:description', ogDescription)
    } else if (description) {
      updateOrCreateMeta('property', 'og:description', description)
    }

    // og:type
    updateOrCreateMeta('property', 'og:type', ogType)

    // og:url
    if (ogUrl) {
      const fullOgUrl = getFullUrl(ogUrl)
      updateOrCreateMeta('property', 'og:url', fullOgUrl)
    } else if (canonical) {
      const fullCanonicalUrl = getFullUrl(canonical)
      updateOrCreateMeta('property', 'og:url', fullCanonicalUrl)
    } else {
      updateOrCreateMeta('property', 'og:url', currentUrl)
    }

    // og:image - Tags completas para compartilhamento social
    if (ogImage) {
      const fullOgImage = getFullUrl(ogImage)
      
      // og:image (URL principal)
      updateOrCreateMeta('property', 'og:image', fullOgImage)
      
      // og:image:url (idêntico a og:image, mas explícito)
      updateOrCreateMeta('property', 'og:image:url', fullOgImage)
      
      // og:image:secure_url (URL HTTPS - importante para Facebook/Instagram)
      // Se a URL já for HTTPS, usar a mesma. Caso contrário, converter para HTTPS
      const secureUrl = fullOgImage.replace(/^http:/, 'https:')
      if (secureUrl.startsWith('https:')) {
        updateOrCreateMeta('property', 'og:image:secure_url', secureUrl)
      }
      
      // og:image:type (MIME type)
      updateOrCreateMeta('property', 'og:image:type', ogImageType)
      
      // og:image:width e og:image:height (dimensões em pixels)
      updateOrCreateMeta('property', 'og:image:width', ogImageWidth.toString())
      updateOrCreateMeta('property', 'og:image:height', ogImageHeight.toString())
      
      // og:image:alt (texto alternativo - OBRIGATÓRIO segundo a especificação)
      const imageAlt = ogImageAlt || ogTitle || title || businessInfo.name
      updateOrCreateMeta('property', 'og:image:alt', imageAlt)
    }

    // og:site_name
    if (ogSiteName) {
      updateOrCreateMeta('property', 'og:site_name', ogSiteName)
    } else {
      updateOrCreateMeta('property', 'og:site_name', businessInfo.name)
    }

    // og:locale
    updateOrCreateMeta('property', 'og:locale', ogLocale)

    // og:locale:alternate (para outros idiomas, se necessário)
    if (ogLocaleAlternate && ogLocaleAlternate.length > 0) {
      ogLocaleAlternate.forEach(locale => {
        updateOrCreateMeta('property', 'og:locale:alternate', locale)
      })
    }

    // og:determiner (palavra que aparece antes do título: a, an, the, "", auto)
    if (ogDeterminer) {
      updateOrCreateMeta('property', 'og:determiner', ogDeterminer)
    }

    // ============================================
    // TWITTER CARD TAGS
    // ============================================

    // twitter:card
    updateOrCreateMeta('name', 'twitter:card', twitterCard)

    // twitter:title
    if (twitterTitle) {
      updateOrCreateMeta('name', 'twitter:title', twitterTitle)
    } else if (ogTitle) {
      updateOrCreateMeta('name', 'twitter:title', ogTitle)
    } else if (title) {
      updateOrCreateMeta('name', 'twitter:title', title)
    }

    // twitter:description
    if (twitterDescription) {
      updateOrCreateMeta('name', 'twitter:description', twitterDescription)
    } else if (ogDescription) {
      updateOrCreateMeta('name', 'twitter:description', ogDescription)
    } else if (description) {
      updateOrCreateMeta('name', 'twitter:description', description)
    }

    // twitter:image
    // Para Twitter Card "summary", preferir imagem quadrada (1:1) se disponível
    // Para "summary_large_image", usar imagem retangular (1200x630)
    if (twitterImage) {
      const fullTwitterImage = getFullUrl(twitterImage)
      updateOrCreateMeta('name', 'twitter:image', fullTwitterImage)
      // twitter:image:alt (texto alternativo para a imagem do Twitter)
      if (twitterImageAlt) {
        updateOrCreateMeta('name', 'twitter:image:alt', twitterImageAlt)
      } else if (twitterTitle || ogTitle || title) {
        updateOrCreateMeta('name', 'twitter:image:alt', twitterTitle || ogTitle || title || '')
      }
    } else if (twitterCard === 'summary' && ogImageSquare) {
      // Para Twitter summary card, usar imagem quadrada se disponível
      const fullSquareImage = getFullUrl(ogImageSquare)
      updateOrCreateMeta('name', 'twitter:image', fullSquareImage)
      if (ogImageAlt || ogTitle || title) {
        updateOrCreateMeta('name', 'twitter:image:alt', ogImageAlt || ogTitle || title || '')
      }
    } else if (ogImage) {
      // Para summary_large_image ou quando não há imagem quadrada, usar imagem retangular
      const fullOgImage = getFullUrl(ogImage)
      updateOrCreateMeta('name', 'twitter:image', fullOgImage)
      // twitter:image:alt (usar o mesmo alt da imagem OG se disponível)
      if (ogImageAlt || ogTitle || title) {
        updateOrCreateMeta('name', 'twitter:image:alt', ogImageAlt || ogTitle || title || '')
      }
    } else if (ogImageSquare) {
      // Fallback: usar imagem quadrada se não houver imagem retangular
      const fullSquareImage = getFullUrl(ogImageSquare)
      updateOrCreateMeta('name', 'twitter:image', fullSquareImage)
      if (ogImageAlt || ogTitle || title) {
        updateOrCreateMeta('name', 'twitter:image:alt', ogImageAlt || ogTitle || title || '')
      }
    }

    // twitter:site (ex: @username)
    if (twitterSite) {
      updateOrCreateMeta('name', 'twitter:site', twitterSite)
    }

    // twitter:creator (ex: @username)
    if (twitterCreator) {
      updateOrCreateMeta('name', 'twitter:creator', twitterCreator)
    }

    // ============================================
    // TAGS ADICIONAIS PARA OUTRAS PLATAFORMAS
    // ============================================

    // LinkedIn - Usa OpenGraph, mas também aceita tags específicas
    // LinkedIn também usa og:image, og:title, og:description (já configurados acima)

    // WhatsApp - Usa OpenGraph (og:image, og:title, og:description)
    // WhatsApp também lê og:url e og:type (já configurados acima)

    // Pinterest - Usa OpenGraph, mas também tem tags específicas
    if (ogImage) {
      updateOrCreateMeta('name', 'pinterest', 'nohover')
      // Pinterest também usa og:image (já configurado acima)
    }

    // ============================================
    // TAGS ADICIONAIS DE SEO E MOBILE
    // ============================================

    // Theme color (para mobile browsers)
    const themeColor =
      getComputedStyle(document.documentElement).getPropertyValue('--color-brand').trim() || '#1A4262'
    updateOrCreateMeta('name', 'theme-color', themeColor)

    // Mobile web app capable
    updateOrCreateMeta('name', 'mobile-web-app-capable', 'yes')
    updateOrCreateMeta('name', 'apple-mobile-web-app-capable', 'yes')
    updateOrCreateMeta('name', 'apple-mobile-web-app-status-bar-style', 'default')

    // Apple Touch Icon (para iOS)
    // Será adicionado via link tag se necessário

    // Viewport (já deve estar no index.html, mas garantimos)
    updateOrCreateMeta('name', 'viewport', 'width=device-width, initial-scale=1.0')

    // Language
    const htmlElement = document.documentElement
    if (!htmlElement.getAttribute('lang')) {
      htmlElement.setAttribute('lang', 'pt-BR')
    }

    // OpenGraph prefix (garantir que está no HTML)
    if (!htmlElement.getAttribute('prefix')) {
      htmlElement.setAttribute('prefix', 'og: https://ogp.me/ns#')
    }

  }, [
    title,
    description,
    canonical,
    keywords,
    author,
    robots,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogImageType,
    ogImageAlt,
    ogType,
    ogUrl,
    ogSiteName,
    ogLocale,
    ogDeterminer,
    ogLocaleAlternate,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterImageAlt,
    twitterSite,
    twitterCreator,
    ogImageSquare,
  ])

  return null
}
