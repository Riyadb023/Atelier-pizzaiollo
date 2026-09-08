import React, { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useCart } from '../context/CartContext.jsx'
import { Price, Reveal } from './ui.jsx'
import { IconPlus, IconCheck, IconStar } from './Icons.jsx'

function SizeSeg({ size, setSize }) {
  return (
    <span className="size-seg">
      {['L', 'XL'].map((s) => (
        <button key={s} className={size === s ? 'on' : ''} onClick={() => setSize(s)}>
          {s}
        </button>
      ))}
    </span>
  )
}

function useAddFeedback() {
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const doAdd = (id, size) => {
    add(id, size)
    setAdded(true)
    setTimeout(() => setAdded(false), 1100)
  }
  return { added, doAdd }
}

function Badges({ item, t }) {
  return (
    <>
      {item.tags.includes('best') && (
        <span className="badge badge-best"><IconStar size={11} /> Best-seller</span>
      )}
      {item.tags.includes('new') && <span className="badge badge-new">New</span>}
      {item.tags.includes('veg') && <span className="badge badge-veg">Veg</span>}
      {item.tags.includes('spicy') && <span className="badge badge-spicy">🌶</span>}
    </>
  )
}

export function BestSellerCard({ item, index = 0 }) {
  const { t, L } = useLang()
  const [size, setSize] = useState('L')
  const { added, doAdd } = useAddFeedback()
  return (
    <Reveal delay={index * 90}>
      <article className="pizza-card hcard">
        <div className="pc-img">
          <img src={item.img} alt={L(item.name)} loading="lazy" />
          <span className="badge badge-best" style={{ position: 'absolute', top: 12, insetInlineStart: 12 }}>
            <IconStar size={11} /> Best-seller
          </span>
          {item.tags.includes('new') && (
            <span className="badge badge-new" style={{ position: 'absolute', top: 12, insetInlineEnd: 12 }}>New</span>
          )}
        </div>
        <div className="pc-body">
          <h3>{L(item.name)}</h3>
          <p className="desc">{L(item.desc)}</p>
          <div className="pc-buy">
            <SizeSeg size={size} setSize={setSize} />
            <Price v={size === 'XL' ? item.xl : item.l} />
            <button
              className={`add-btn ${added ? 'added' : ''}`}
              style={{ marginInlineStart: 'auto' }}
              onClick={() => doAdd(item.id, size)}
            >
              {added ? <IconCheck size={14} /> : <IconPlus size={14} />}
              {added ? t('common.added') : t('common.add')}
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function MenuRow({ item, index = 0 }) {
  const { t, L } = useLang()
  const [size, setSize] = useState('L')
  const { added, doAdd } = useAddFeedback()
  return (
    <Reveal delay={Math.min(index, 6) * 50}>
      <div className="menu-item">
        <div className="mi-top">
          <span className="mi-name">
            {L(item.name)}
            <Badges item={item} t={t} />
          </span>
          <span className="leader" />
          <span className="mi-price">{(size === 'XL' ? item.xl : item.l).toLocaleString('fr-FR')} <small>{t('common.cur')}</small></span>
        </div>
        <p className="mi-desc">{L(item.desc)}</p>
        <div className="mi-actions">
          <SizeSeg size={size} setSize={setSize} />
          <button className={`add-btn ${added ? 'added' : ''}`} onClick={() => doAdd(item.id, size)}>
            {added ? <IconCheck size={14} /> : <IconPlus size={14} />}
            {added ? t('common.added') : t('common.add')}
          </button>
        </div>
      </div>
    </Reveal>
  )
}
