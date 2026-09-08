import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { usePageMeta } from '../hooks.js'
import { useCart, buildOrderMessage } from '../context/CartContext.jsx'
import { BRANCHES } from '../data/site.js'
import { Price, Reveal } from '../components/ui.jsx'
import { IconScooter, IconWhatsApp, IconCheck, IconX } from '../components/Icons.jsx'

export default function Order() {
  const { t, L, lang, cur } = useLang()
  const { lines, total, add, dec, remove, clear } = useCart()
  const [info, setInfo] = useState({
    name: '',
    phone: '',
    mode: 'delivery',
    branch: BRANCHES[0].id,
    address: '',
    note: '',
  })
  const [err, setErr] = useState(false)
  const [sent, setSent] = useState(false)
  const [waUrl, setWaUrl] = useState('')
  usePageMeta(`${t('order.title')} — L'Atelier du Pizzaiolo`)

  const branch = BRANCHES.find((b) => b.id === info.branch)

  const submit = (e) => {
    e.preventDefault()
    if (!info.name.trim() || !info.phone.trim() || lines.length === 0) {
      setErr(true)
      return
    }
    const msg = buildOrderMessage({
      lines,
      total,
      info: { ...info, branchName: L(branch.name) },
      lang,
      cur,
    })
    const url = `https://wa.me/${branch.wa}?text=${encodeURIComponent(msg)}`
    setWaUrl(url)
    window.open(url, '_blank')
    setSent(true)
    setErr(false)
  }

  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="kicker">{t('order.kicker')}</span>
          <h1>{t('order.title')}</h1>
          <p className="sub">{t('order.sub')}</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'clamp(28px,4vw,48px)' }}>
        <div className="container">
          <div className="steps">
            <span className={`step ${lines.length > 0 ? 'on' : ''}`}><span className="n">1</span> {t('order.step1')}</span>
            <span className={`step ${lines.length > 0 ? 'on' : ''}`}><span className="n">2</span> {t('order.step2')}</span>
            <span className={`step ${sent ? 'on' : ''}`}><span className="n">3</span> {t('order.step3')}</span>
          </div>

          <div className="order-grid">
            {/* CART */}
            <Reveal>
              <div className="order-card hcard">
                <h2>{t('order.cartTitle')}</h2>
                {lines.length === 0 ? (
                  <div className="drawer-empty">
                    <div className="big">🍕</div>
                    <b>{t('cart.empty')}</b>
                    <p style={{ fontSize: 14, opacity: 0.7 }}>{t('cart.emptySub')}</p>
                    <Link to="/menu" className="btn btn-ink btn-sm">{t('cart.browse')}</Link>
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8em' }}>
                      {lines.map((l) => (
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
                              <button className="link-btn" onClick={() => remove(l.id, l.size)} style={{ display: 'inline-flex', gap: '0.35em', alignItems: 'center' }}>
                                <IconX size={13} /> {t('cart.remove')}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="drawer-total" style={{ borderTop: '2px dotted var(--line-strong)', paddingTop: '0.9em' }}>
                      <span>{t('cart.total')}</span>
                      <Price v={total} />
                    </div>
                    <p style={{ fontSize: 12.5, opacity: 0.65 }}>{t('cart.deliveryNote')}</p>
                  </>
                )}
              </div>
            </Reveal>

            {/* FORM / SUCCESS */}
            <Reveal delay={120}>
              {sent ? (
                <div className="order-card hcard order-success">
                  <span className="ok"><IconCheck size={30} /></span>
                  <h2>{t('order.successTitle')}</h2>
                  <p style={{ fontSize: 14.5, opacity: 0.8, maxWidth: '26em' }}>{t('order.successSub')}</p>
                  <a className="btn btn-primary" href={waUrl} target="_blank" rel="noreferrer">
                    <IconWhatsApp size={17} /> {t('order.reopen')}
                  </a>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      clear()
                      setSent(false)
                      setInfo({ name: '', phone: '', mode: 'delivery', branch: BRANCHES[0].id, address: '', note: '' })
                    }}
                  >
                    {t('order.again')}
                  </button>
                </div>
              ) : (
                <form className="order-card hcard" onSubmit={submit}>
                  <h2>{t('order.formTitle')}</h2>
                  <div className="form-grid">
                    <div className="field">
                      <label>{t('order.name')}</label>
                      <input value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} placeholder={t('order.namePh')} />
                    </div>
                    <div className="field">
                      <label>{t('order.phone')}</label>
                      <input value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} placeholder={t('order.phonePh')} />
                    </div>
                    <div className="field full">
                      <label>{t('order.mode')}</label>
                      <div className="mode-seg">
                        <button type="button" className={info.mode === 'delivery' ? 'on' : ''} onClick={() => setInfo({ ...info, mode: 'delivery' })}>
                          {t('order.modeDeliv')}
                        </button>
                        <button type="button" className={info.mode === 'takeaway' ? 'on' : ''} onClick={() => setInfo({ ...info, mode: 'takeaway' })}>
                          {t('order.modeTake')}
                        </button>
                      </div>
                    </div>
                    <div className="field full">
                      <label>{t('order.branch')}</label>
                      <div className="branch-pills">
                        {BRANCHES.map((b) => (
                          <button type="button" key={b.id} className={`branch-pill ${info.branch === b.id ? 'on' : ''}`} onClick={() => setInfo({ ...info, branch: b.id })}>
                            <span className="dot" /> {L(b.name)} — {b.tel}
                          </button>
                        ))}
                      </div>
                    </div>
                    {info.mode === 'delivery' && (
                      <div className="field full">
                        <label>{t('order.address')}</label>
                        <input value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })} placeholder={t('order.addressPh')} />
                      </div>
                    )}
                    <div className="field full">
                      <label>{t('order.note')}</label>
                      <textarea rows={3} value={info.note} onChange={(e) => setInfo({ ...info, note: e.target.value })} placeholder={t('order.notePh')} />
                    </div>
                  </div>
                  {err && <p style={{ color: 'var(--tomato)', fontSize: 13.5, fontWeight: 700 }}>{lines.length === 0 ? t('cart.empty') : t('order.err')}</p>}
                  <button className="btn btn-primary" type="submit" disabled={lines.length === 0} style={lines.length === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}>
                    <IconWhatsApp size={17} /> {t('order.submit')}
                  </button>
                  <p style={{ fontSize: 12.5, opacity: 0.65, display: 'flex', gap: '0.5em', alignItems: 'center' }}>
                    <IconScooter size={14} /> {t('cart.deliveryNote')}
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
