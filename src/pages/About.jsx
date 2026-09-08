import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { usePageMeta } from '../hooks.js'
import { STATS } from '../data/site.js'
import { Reveal, SectionHead } from '../components/ui.jsx'
import { IconArrow } from '../components/Icons.jsx'

export default function About() {
  const { t } = useLang()
  usePageMeta(`${t('nav.about')} — L'Atelier du Pizzaiolo`)
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="kicker">{t('about.kicker')}</span>
          <h1>{t('about.title')}</h1>
          <p className="sub">{t('about.lead')}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-copy">
              <p className="lead">{t('about.lead')}</p>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
              <Link to="/menu" className="btn btn-ink">
                {t('common.seeMenu')} <IconArrow size={17} className="flip" />
              </Link>
            </Reveal>
            <Reveal delay={140} className="about-collage">
              <img className="tall" src="/images/oven.jpg" alt="Four à bois" loading="lazy" />
              <img src="/images/dough.jpg" alt="Pâte à pizza" loading="lazy" />
              <img src="/images/interior.jpg" alt="Salle du restaurant" loading="lazy" />
            </Reveal>
          </div>

          <Reveal className="about-quote">
            <p className="q">{t('about.quote')}</p>
            <p className="by">— {t('about.by')}</p>
          </Reveal>

          <div className="stats-band">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="stat hcard">
                  <div className="num">{s.n}</div>
                  <div className="lbl">{t(s.label)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
