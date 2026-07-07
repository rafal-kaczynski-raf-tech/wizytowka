import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== 'undefined' && window.localStorage.getItem('lang')
    return saved === 'en' || saved === 'pl' ? saved : 'pl'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem('lang', lang)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      setLang,
      toggleLanguage: () => setLang((current) => (current === 'pl' ? 'en' : 'pl')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
