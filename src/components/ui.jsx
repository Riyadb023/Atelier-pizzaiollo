import React, { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useOpenStatus } from '../hooks.js'
import { IconStar } from './Icons.jsx'

export function Reveal({ children, delay = 0, className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const { style, ...others } = rest
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms`, ...style }} {...others}>
      {children}
    </div>
  )
}

export function SectionHead({ kicker, title, sub, center = false, dark = false }) {
  const { t } = useLang()
  return (
    <Reveal className={`section-head ${center ? 'center' : ''} ${dark ? 'on-dark' : ''}`}>
      <span className="kicker">{t(kicker)}</span>
      <h2>{title}</h2>
      {sub ? <p className="sub">{sub}</p> : null}
    </Reveal>
  )
}

export function Stars({ n = 5, size = 15 }) {
  return (
    <span className="stars">
      {Array.from({ length: n }).map((_, i) => (
        <IconStar key={i} size={size} />
      ))}
    </span>
  )
}

export function OpenBadge() {
  const { t } = useLang()
  const { open, openH } = useOpenStatus()
  return (
    <span className={`open-badge ${open ? '' : 'closed'}`}>
      <span className="pulse" />
      {open ? `${t('open.now')} · ${t('open.closes')}` : t(openH === 18 ? 'open.closed18' : 'open.closed11')}
    </span>
  )
}

export function Price({ v, big = false }) {
  const { cur } = useLang()
  return (
    <span className="price" style={big ? { fontSize: '1.25em' } : undefined}>
      {v.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' ')}
      <span className="cur">{cur}</span>
    </span>
  )
}

export function Marquee() {
  const { t } = useLang()
  const items = [1, 2, 3, 4, 5, 6].map((i) => t(`mq.${i}`))
  const row = items.map((label, i) => <span key={i}>{label}</span>)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}
