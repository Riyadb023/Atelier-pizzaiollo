import React, { useMemo, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { usePageMeta } from '../hooks.js'
import { MENU } from '../data/menu.js'
import { MenuRow } from '../components/PizzaCard.jsx'
import { Reveal } from '../components/ui.jsx'
import { IconSearch } from '../components/Icons.jsx'

const FILTERS = [
  { id: 'all', key: 'menuPage.fAll' },
  { id: 'best', key: 'menuPage.fBest' },
  { id: 'veg', key: 'menuPage.fVeg' },
  { id: 'sea', key: 'menuPage.fSea' },
  { id: 'spicy', key: 'menuPage.fSpicy' },
]

export default function MenuPage() {
  const { t, L } = useLang()
  const [q, setQ] = useState('')
  const [f, setF] = useState('all')
  usePageMeta(`${t('menuPage.title')} — L'Atelier du Pizzaiolo`)

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return MENU.map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => {
        const okF = f === 'all' || item.tags.includes(f)
        const hay = `${item.name.fr} ${item.name.ar} ${item.desc.fr}`.toLowerCase()
        const okQ = !query || hay.includes(query)
        return okF && okQ
      }),
    }))
  }, [q, f])

  const totalShown = filtered.reduce((s, c) => s + c.items.length, 0)

  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="kicker">{t('menuPage.kicker')}</span>
          <h1>{t('menuPage.title')}</h1>
          <p className="sub">{t('menuPage.sub')}</p>
        </div>
      </header>

      <div className="menu-toolbar">
        <div className="container menu-toolbar-inner">
          <label className="search-box">
            <IconSearch size={17} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('menuPage.search')} />
          </label>
          <div className="filter-chips">
            {FILTERS.map((x) => (
              <button key={x.id} className={`chip ${f === x.id ? 'on' : ''}`} onClick={() => setF(x.id)}>
                {t(x.key)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'clamp(24px,3vw,40px)' }}>
        <div className="container">
          {totalShown === 0 && (
            <p style={{ textAlign: 'center', padding: '3em 0', opacity: 0.7 }}>{t('menuPage.empty')}</p>
          )}
          {filtered.map(
            (cat) =>
              cat.items.length > 0 && (
                <div className="menu-cat" key={cat.id}>
                  <div className="menu-cat-band script">{t(cat.nameKey)}</div>
                  <div className="menu-list">
                    {cat.items.map((item, i) => (
                      <MenuRow key={item.id} item={item} index={i} />
                    ))}
                  </div>
                </div>
              )
          )}
          <Reveal className="menu-note">
            <span>{t('menuPage.note1')}</span>
            <span>{t('menuPage.note2')}</span>
          </Reveal>
        </div>
      </section>
    </>
  )
}
