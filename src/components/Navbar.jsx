import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useScrolled } from '../hooks.js'
import { IconBag, IconBurger, IconScooter, IconX, IconInstagram, IconWhatsApp } from './Icons.jsx'
import { INSTAGRAM, BRANCHES } from '../data/site.js'

const LINKS = [
  { to: '/menu', key: 'nav.menu' },
  { to: '/restaurants', key: 'nav.restaurants' },
  { to: '/a-propos', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const { count, openDrawer } = useCart()
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="brand">
            <img src="/images/logo.png" alt="L'Atelier du Pizzaiolo" />
            <span className="brand-text">
              <span className="brand-script">l'atelier</span>
              <span className="brand-small">du Pizzaiolo</span>
            </span>
          </Link>

          <nav className="nav-links">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to}>
                {t(l.key)}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="lang-toggle" role="group" aria-label="Langue">
              <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
              <button className={lang === 'ar' ? 'on' : ''} onClick={() => setLang('ar')}>ع</button>
            </div>
            <button className="icon-btn" onClick={openDrawer} aria-label={t('cart.title')}>
              <IconBag size={19} />
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
            <Link to="/commander" className="btn btn-primary btn-sm nav-order">
              <IconScooter size={18} />
              {t('nav.order')}
            </Link>
            <button className="icon-btn burger" onClick={() => setOpen(true)} aria-label="Menu">
              <IconBurger size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="icon-btn" style={{ position: 'absolute', top: 18, insetInlineEnd: 18 }} onClick={() => setOpen(false)} aria-label={t('common.close')}>
          <IconX size={20} />
        </button>
        {LINKS.map((l, i) => (
          <Link key={l.to} to={l.to}>
            {t(l.key)} <span>0{i + 1}</span>
          </Link>
        ))}
        <div className="mm-foot">
          <Link to="/commander" className="btn btn-primary">
            <IconScooter size={19} /> {t('nav.order')}
          </Link>
          <div style={{ display: 'flex', gap: '0.7em', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="lang-toggle">
              <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
              <button className={lang === 'ar' ? 'on' : ''} onClick={() => setLang('ar')}>ع</button>
            </div>
            <div style={{ display: 'flex', gap: '0.6em' }}>
              <a className="icon-btn" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram size={18} /></a>
              <a className="icon-btn" href={`https://wa.me/${BRANCHES[0].wa}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWhatsApp size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
