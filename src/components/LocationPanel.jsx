import React, { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { BRANCHES } from '../data/site.js'
import { OpenBadge, Reveal } from './ui.jsx'
import { IconPhone, IconWhatsApp, IconPin } from './Icons.jsx'

export function LocationPanel() {
  const { t, L } = useLang()
  const [sel, setSel] = useState(BRANCHES[0].id)
  const b = BRANCHES.find((x) => x.id === sel)
  return (
    <div>
      <div className="loc-tabs">
        {BRANCHES.map((x) => (
          <button key={x.id} className={`loc-tab ${sel === x.id ? 'on' : ''}`} onClick={() => setSel(x.id)}>
            {L(x.name)}
          </button>
        ))}
      </div>
      <Reveal className="loc-panel" key={b.id}>
        <div className="loc-info hcard">
          <h3>{L(b.name)}</h3>
          <OpenBadge />
          <p className="addr">
            <IconPin size={17} /> {L(b.addr)}
          </p>
          <div className="loc-services">
            <span className="badge">{t('svc.onsite')}</span>
            <span className="badge">{t('svc.takeaway')}</span>
            <span className="badge">{t('svc.delivery')}</span>
          </div>
          <div className="loc-hours">
            <div className="lh-row"><span>{t('hours.week')}</span><b>{t('hours.tWeek')}</b></div>
            <div className="lh-row"><span>{t('hours.fri')}</span><b>{t('hours.tFri')}</b></div>
            <div className="lh-row"><span>{t('hours.weekend')}</span><b>{t('hours.tWeekend')}</b></div>
          </div>
          <div className="loc-actions">
            <a className="btn btn-primary btn-sm" href={`tel:${b.telHref}`}>
              <IconPhone size={16} /> {b.tel}
            </a>
            <a className="btn btn-outline btn-sm" href={`https://wa.me/${b.wa}`} target="_blank" rel="noreferrer">
              <IconWhatsApp size={16} /> {t('common.wa')}
            </a>
            <a className="btn btn-outline btn-sm" href={b.maps} target="_blank" rel="noreferrer">
              <IconPin size={16} /> {t('common.directions')}
            </a>
          </div>
        </div>
        <div className="loc-map">
          <iframe title={L(b.name)} src={b.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </Reveal>
    </div>
  )
}

export function LocationCards() {
  const { t, L } = useLang()
  return (
    <div className="loc-cards">
      {BRANCHES.map((b, i) => (
        <Reveal key={b.id} delay={i * 90}>
          <div className="loc-card hcard">
            <h3>{L(b.name)}</h3>
            <OpenBadge />
            <p className="addr">{L(b.addr)}</p>
            <a className="lc-tel" href={`tel:${b.telHref}`}>
              <IconPhone size={15} /> {b.tel}
            </a>
            <div className="lc-actions">
              <a className="btn btn-ink btn-sm" href={`https://wa.me/${b.wa}`} target="_blank" rel="noreferrer">
                <IconWhatsApp size={15} /> {t('common.wa')}
              </a>
              <a className="btn btn-outline btn-sm" href={b.maps} target="_blank" rel="noreferrer">
                <IconPin size={15} /> {t('common.directions')}
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
