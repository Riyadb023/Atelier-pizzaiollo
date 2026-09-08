import { useEffect, useState } from 'react'

export function usePageMeta(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

/* Ouvertures : lun–jeu & sam–dim 11h–00h, vendredi 18h–00h */
export function useOpenStatus() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(id)
  }, [])
  const day = now.getDay() // 0 = dimanche
  const h = now.getHours()
  const openH = day === 5 ? 18 : 11
  const open = h >= openH
  return { open, openH }
}
