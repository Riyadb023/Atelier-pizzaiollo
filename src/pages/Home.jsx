import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { usePageMeta } from '../hooks.js'
import { BEST_SELLERS, MENU, getItem } from '../data/menu.js'
import { REVIEWS, OFFERS, WHY_US, IG_GRID, INSTAGRAM } from '../data/site.js'
import { Reveal, SectionHead, Stars, Marquee, Price } from '../components/ui.jsx'
import { BestSellerCard } from '../components/PizzaCard.jsx'
import { LocationCards } from '../components/LocationPanel.jsx'
import {
  IconScooter, IconArrow, IconWheat, IconCheese, IconFlame, IconHalal,
  IconStar, IconInstagram, IconPin,
} from '../components/Icons.jsx'

const WHY_ICONS = { wheat: IconWheat, cheese: IconCheese, flame: IconFlame, halal: IconHalal }
const ROTS = ['-1.2deg', '0.9deg', '-0.7deg', '1.1deg', '-0.9deg', '0.6deg']
const TILE_PICKS = { tomate: ['signature', 'newyork', '4saisons'], creme: ['raclette', 'boiseefumee', 'burrata'] }
const TILE_IMG = { tomate: '/images/hero-pizza.jpg', creme: '/images/pizza-raclette.jpg' }

function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <h1>
            {t('hero.t1')} <span className="accent">{t('hero.accent')}</span>
            {t('hero.t2')}
          </h1>
          <p className="sub">{t('hero.sub')}</p>
          <div className="hero-ctas">
            <Link to="/commander" className="btn btn-primary">
              <IconScooter size={19} /> {t('hero.ctaOrder')}
            </Link>
            <Link to="/menu" className="btn btn-outline">
              {t('hero.ctaMenu')} <IconArrow size={17} className="flip" />
            </Link>
          </div>
          <div className="hero-trust">
            <span><IconStar size={14} /> {t('hero.s1')}</span>
            <span><IconInstagram size={14} /> {t('hero.s2')}</span>
            <span><IconPin size={14} /> {t('hero.s3')}</span>
          </div>
        </div>
        <div className="disc-wrap">
          <div className="disc">
            <img src="/images/hero-pizza.jpg" alt="Pizza artisanale L'Atelier du Pizzaiolo" />
          </div>
          <svg className="disc-ring" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path id="ringpath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text>
              <textPath href="#ringpath">{t('hero.ring')}</textPath>
            </text>
          </svg>
          <span className="float-chip c1"><IconFlame size={15} /> {t('hero.chip2')}</span>
          <span className="float-chip c2"><IconWheat size={15} /> {t('hero.chip1')}</span>
        </div>
      </div>
    </section>
  )
}

function MenuPreview() {
  const { t, L } = useLang()
  return (
    <section className="section">
      <div className="container">
        <SectionHead kicker="menu.kicker" title={t('menu.title')} sub={t('menu.sub')} />
        <div className="menu-tiles">
          {MENU.map((cat, ci) => (
            <Reveal key={cat.id} delay={ci * 120}>
              <article className="menu-tile hcard">
                <div className="mt-img">
                  <img src={TILE_IMG[cat.id]} alt={t(cat.nameKey)} loading="lazy" />
                </div>
                <div className="mt-band script">{t(cat.nameKey)}</div>
                <div className="mt-rows">
                  {TILE_PICKS[cat.id].map((id) => {
                    const item = getItem(id)
                    return (
                      <div className="mt-row" key={id}>
                        <span className="name">{L(item.name)}</span>
                        <span className="leader" />
                        <Price v={item.l} />
                      </div>
                    )
                  })}
                  <Link to="/menu" className="mt-cta">
                    {t('menu.cta')} <IconArrow size={16} className="flip" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { t, L } = useLang()
  usePageMeta(`L'Atelier du Pizzaiolo — ${t('hero.kicker')}`)
  return (
    <>
      <Hero />
      <Marquee />

      {/* BEST SELLERS */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="best.kicker" title={t('best.title')} sub={t('best.sub')} />
          <div className="best-grid">
            {BEST_SELLERS.map((item, i) => (
              <BestSellerCard key={item.id} item={item} index={i} />
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 'clamp(28px,4vw,44px)' }}>
            <Link to="/menu" className="btn btn-ink">
              {t('best.cta')} <IconArrow size={17} className="flip" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why">
        <div className="container">
          <SectionHead dark kicker="why.kicker" title={t('why.title')} />
          <div className="why-grid">
            {WHY_US.map((w, i) => {
              const Ic = WHY_ICONS[w.icon]
              return (
                <Reveal key={w.icon} delay={i * 90}>
                  <div className="why-item">
                    <span className="wi-num">0{i + 1}</span>
                    <div className="wi-icon"><Ic size={24} /></div>
                    <h3>{t(w.t)}</h3>
                    <p>{t(w.d)}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <MenuPreview />

      {/* OFFERS */}
      <section className="section offers">
        <div className="container">
          <SectionHead dark kicker="offers.kicker" title={t('offers.title')} sub={t('offers.sub')} />
          <div className="offers-grid">
            {OFFERS.map((o, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className={`ticket ${o.featured ? 'featured' : ''}`}>
                  <span className="t-tag">{L(o.tag)}</span>
                  <h3>{L(o.title)}</h3>
                  <p className="t-desc">{L(o.desc)}</p>
                  <div className="t-line">
                    <span className="t-price">{o.price} <small>{t('common.cur')}</small></span>
                    {o.old && <span className="t-old">{o.old} {t('common.cur')}</span>}
                    <Link to="/commander" className={`btn btn-sm ${o.featured ? 'btn-cream' : 'btn-ink'}`} style={{ marginInlineStart: 'auto' }}>
                      <IconScooter size={16} /> {t('common.order')}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="reviews.kicker" title={t('reviews.title')} sub={t('reviews.sub')} />
          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <article className="review" style={{ '--rot': ROTS[i % ROTS.length] }}>
                  <Stars n={5} />
                  <p className="r-quote">« {L(r.q)} »</p>
                  <div className="r-who">
                    <span className="r-avatar">{r.name.charAt(0)}</span>
                    <span>
                      <b>{r.name}</b>
                      <span className="r-src" style={{ display: 'block' }}>{t('reviews.src')}</span>
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <SectionHead center kicker="ig.kicker" title={t('ig.title')} sub={t('ig.sub')} />
          <div className="ig-grid">
            {IG_GRID.map((src, i) => (
              <Reveal key={src} delay={i * 60}>
                <a className="ig-tile" href={INSTAGRAM} target="_blank" rel="noreferrer">
                  <img src={src} alt="Instagram L'Atelier du Pizzaiolo" loading="lazy" />
                  <span className="ig-over"><IconInstagram size={26} /></span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: '2em' }}>
            <a className="btn btn-ink" href={INSTAGRAM} target="_blank" rel="noreferrer">
              <IconInstagram size={17} /> {t('ig.cta')}
            </a>
          </Reveal>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="loc.kicker" title={t('loc.title')} sub={t('loc.sub')} />
          <LocationCards />
          <Reveal style={{ textAlign: 'center', marginTop: '2.2em' }}>
            <Link to="/restaurants" className="btn btn-outline">
              {t('nav.restaurants')} <IconArrow size={16} className="flip" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ORDER CTA */}
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
