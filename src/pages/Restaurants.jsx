import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { usePageMeta } from '../hooks.js'
import { LocationPanel } from '../components/LocationPanel.jsx'
import { Reveal } from '../components/ui.jsx'
import { IconScooter } from '../components/Icons.jsx'

export default function Restaurants() {
  const { t } = useLang()
  usePageMeta(`${t('nav.restaurants')} — L'Atelier du Pizzaiolo`)
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="kicker">{t('rest.kicker')}</span>
          <h1>{t('rest.title')}</h1>
          <p className="sub">{t('rest.sub')}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <LocationPanel />
        </div>
      </section>

      <section className="section octa">
        <div className="container octa-inner">
          <Reveal>
            <h2>
              {t('octa.t1')} <span className="script">{t('octa.script')}</span>
            </h2>
            <p>{t('octa.sub')}</p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/commander" className="btn btn-cream">
              <IconScooter size={19} /> {t('octa.btn')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
