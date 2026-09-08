import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { STRINGS } from './data/strings.js'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('adp-lang') === 'ar' ? 'ar' : 'fr'
    } catch {
      return 'fr'
    }
  })

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    try {
      localStorage.setItem('adp-lang', lang)
    } catch {}
  }, [lang])

  const value = useMemo(() => {
    const t = (key) => (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.fr[key] || key
    const L = (obj) => (obj ? obj[lang] ?? obj.fr : '')
    return {
      lang,
      setLang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      t,
      L,
      cur: lang === 'ar' ? 'دج' : 'DA',
    }
  }, [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
