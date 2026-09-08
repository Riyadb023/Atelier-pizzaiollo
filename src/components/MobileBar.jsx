import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useCart } from '../context/CartContext.jsx'
import { IconScooter } from './Icons.jsx'

export default function MobileBar() {
  const { t, cur } = useLang()
  const { count, total } = useCart()
  const { pathname } = useLocation()
  if (pathname === '/commander') return null
  return (
    <div className="mobilebar">
      <Link to="/menu" className="btn btn-outline" style={{ color: 'var(--cream)', borderColor: 'rgba(245,239,227,.4)' }}>
        {t('common.seeMenu')}
      </Link>
      <Link to="/commander" className="btn btn-primary">
        <IconScooter size={18} />
        {count > 0 ? `${t('nav.order')} · ${total.toLocaleString('fr-FR')} ${cur}` : t('nav.order')}
      </Link>
    </div>
  )
}
