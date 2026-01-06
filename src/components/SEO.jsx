import { useEffect } from 'react'

const SEO = ({ title, description, keywords, ogImage, ogType = 'website' }) => {
  useEffect(() => {
    // Update document title
    document.title = title || 'StackSens - Web & Mobile App Development'

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description || 'StackSens builds reliable web and mobile applications for restaurants, hospitality businesses, and startups.')

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords)
    }

    // Open Graph tags
    const ogTags = {
      'og:title': title || 'StackSens - Web & Mobile App Development',
      'og:description': description || 'StackSens builds reliable web and mobile applications for restaurants, hospitality businesses, and startups.',
      'og:type': ogType,
      'og:url': window.location.href,
    }

    if (ogImage) {
      ogTags['og:image'] = ogImage
    }

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })

    // Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title || 'StackSens - Web & Mobile App Development',
      'twitter:description': description || 'StackSens builds reliable web and mobile applications for restaurants, hospitality businesses, and startups.',
    }

    if (ogImage) {
      twitterTags['twitter:image'] = ogImage
    }

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })

    // Structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'StackSens',
      description: 'Web and mobile app development company specializing in restaurant and hospitality solutions',
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'contact@stacksens.com',
      },
      sameAs: [
        'https://github.com/stacksens',
        'https://linkedin.com/company/stacksens',
      ],
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)
  }, [title, description, keywords, ogImage, ogType])

  return null
}

export default SEO

