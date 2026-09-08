import React, { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { usePageMeta } from '../hooks.js'
import { BRANCHES, FAQ, INSTAGRAM } from '../data/site.js'
import { buildContactMessage } from '../context/CartContext.jsx'
import { LocationCards } from '../components/LocationPanel.jsx'
import { Reveal, SectionHead } from '../components/ui.jsx'
import { IconWhatsApp, IconInstagram, IconCheck } from '../components/Icons.jsx'

export default function Contact() {
  const { t, lang } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState(false)
  usePageMeta(`${t('nav.contact')} — L'Atelier du Pizzaiolo`)

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setErr(true)
      return
    }
    const msg = buildContactMessage(form, lang)
    window.open(`https://wa.me/${BRANCHES[0].wa}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setErr(false)
  }

  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="kicker">{t('contact.kicker')}</span>
          <h1>{t('contact.title')}</h1>
          <p className="sub">{t('contact.sub')}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <form className="order-card hcard" onSubmit={submit}>
                <h2>{t('contact.formTitle')}</h2>
                <p style={{ fontSize: 14, opacity: 0.75, marginTop: '-0.6em' }}>{t('contact.formSub')}</p>
                <div className="form-grid">
                  <div className="field">
                    <label>{t('order.name')}</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t('order.namePh')} />
                  </div>
                  <div className="field">
                    <label>{t('order.phone')}</label>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder={t('order.phonePh')} />
                  </div>
                  <div className="field full">
                    <label>{t('contact.msg')}</label>
                    <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t('contact.msgPh')} />
                  </div>
                </div>
                {err && <p style={{ color: 'var(--tomato)', fontSize: 13.5, fontWeight: 700 }}>{t('order.err')}</p>}
                {sent && (
                  <p style={{ display: 'flex', gap: '0.5em', alignItems: 'center', color: 'var(--green)', fontWeight: 800, fontSize: 14 }}>
                    <IconCheck size={16} /> {t('order.successTitle')}
                  </p>
                )}
                <button className="btn btn-primary" type="submit">
                  <IconWhatsApp size={17} /> {t('contact.send')}
                </button>
                <a className="link-btn" href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', gap: '0.5em', alignItems: 'center' }}>
                  <IconInstagram size={14} /> @latelier_du_pizzaiolo
                </a>
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="faq">
                <h2 style={{ marginBottom: '0.4em' }}>{t('contact.faqTitle')}</h2>
                {FAQ.map((f) => (
                  <details key={f.q}>
                    <summary>{t(f.q)}</summary>
                    <div className="a">{t(f.a)}</div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead kicker="loc.kicker" title={t('loc.title')} sub={t('loc.sub')} />
          <LocationCards />
        </div>
      </section>
    </>
  )
}
