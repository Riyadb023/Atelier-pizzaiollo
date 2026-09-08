import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useCart } from '../context/CartContext.jsx'
import { Price } from './ui.jsx'
import { IconX, IconScooter } from './Icons.jsx'

export default function CartDrawer() {
  const { t, L, cur } = useLang()
  const { lines, total, drawerOpen, closeDrawer, dec, add, remove, clear } = useCart()
  const navigate = useNavigate()

  return (
    <>
      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={closeDrawer} />
      <aside className={`drawer ${drawerOpen ? 'open' : ''}`} aria-label={t('cart.title')}>
        <div className="drawer-head">
          <h3>{t('cart.title')}</h3>
          <button className="icon-btn" onClick={closeDrawer} aria-label={t('common.close')}>
            <IconX size={18} />
          </button>
        </div>

        <div className="drawer-body">
          {lines.length === 0 ? (
            <div className="drawer-empty">
              <div className="big">🍕</div>
              <b>{t('cart.empty')}</b>
              <p style={{ fontSize: 14, opacity: 0.7 }}>{t('cart.emptySub')}</p>
              <Link to="/menu" className="btn btn-ink btn-sm" onClick={closeDrawer}>
                {t('cart.browse')}
              </Link>
            </div>
          ) : (
            lines.map((l) => (
              <div className="cart-line" key={`${l.id}-${l.size}`}>
                <img src={l.item.img || '/images/hero-pizza.jpg'} alt={L(l.item.name)} />
                <div className="cl-main">
                  <div className="cl-name">
                    <span>{L(l.item.name)}</span>
                    <Price v={l.total} />
                  </div>
                  <div className="cl-meta">{l.size} · {l.unit} {cur}</div>
                  <div className="cl-bottom">
                    <span className="qty">
                      <button onClick={() => dec(l.id, l.size)} aria-label="-">−</button>
                      <span>{l.qty}</span>
                      <button onClick={() => add(l.id, l.size)} aria-label="+">+</button>
                    </span>
                    <button className="link-btn" onClick={() => remove(l.id, l.size)}>{t('cart.remove')}</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {lines.length > 0 && (
          <div className="drawer-foot">
            <div className="drawer-total">
              <span>{t('cart.total')}</span>
              <Price v={total} />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                closeDrawer()
                navigate('/commander')
              }}
            >
              <IconScooter size={18} /> {t('cart.checkout')}
            </button>
            <button className="link-btn" onClick={clear}>{t('cart.clear')}</button>
          </div>
        )}
      </aside>
    </>
  )
}
