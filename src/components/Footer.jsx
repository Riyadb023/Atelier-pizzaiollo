import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { BRANCHES, INSTAGRAM } from '../data/site.js'
import { OpenBadge } from './ui.jsx'
import { IconInstagram, IconWhatsApp, IconPhone, IconPin } from './Icons.jsx'

export default function Footer() {
  const { t, L } = useLang()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <img src="/images/logo.png" alt="L'Atelier du Pizzaiolo" />
            <div className="f-script script">l'atelier du Pizzaiolo</div>
            <p className="f-tag">{t('footer.tagline')}</p>
            <div className="f-social">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram size={18} /></a>
              <a href={`https://wa.me/${BRANCHES[0].wa}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWhatsApp size={18} /></a>
              <a href={`tel:${BRANCHES[0].telHref}`} aria-label={t('common.call')}><IconPhone size={18} /></a>
            </div>
          </div>

          <div>
            <h4>{t('footer.nav')}</h4>
            <ul>
              <li><Link to="/menu">{t('nav.menu')}</Link></li>
              <li><Link to="/restaurants">{t('nav.restaurants')}</Link></li>
              <li><Link to="/a-propos">{t('nav.about')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
              <li><Link to="/commander">{t('nav.order')}</Link></li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.contact')}</h4>
            <ul>
              {BRANCHES.map((b) => (
                <li key={b.id}>
                  <a href={`tel:${b.telHref}`} style={{ display: 'inline-flex', gap: '0.5em', alignItems: 'center' }}>
                    <IconPin size={14} /> {L(b.name)} · {b.tel}
                  </a>
                </li>
              ))}
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', gap: '0.5em', alignItems: 'center' }}>
                  <IconInstagram size={14} /> @latelier_du_pizzaiolo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.hours')}</h4>
            <ul>
              <li style={{ display: 'flex', justifyContent: 'space-between', gap: '1em' }}><span>{t('hours.week')}</span><b>{t('hours.tWeek')}</b></li>
              <li style={{ display: 'flex', justifyContent: 'space-between', gap: '1em' }}><span>{t('hours.fri')}</span><b>{t('hours.tFri')}</b></li>
              <li style={{ display: 'flex', justifyContent: 'space-between', gap: '1em' }}><span>{t('hours.weekend')}</span><b>{t('hours.tWeekend')}</b></li>
            </ul>
            <div style={{ marginTop: '1em' }}>
              <OpenBadge />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('footer.rights')}</span>
          <span>{t('footer.demo')}</span>
        </div>
      </div>
    </footer>
  )
}
