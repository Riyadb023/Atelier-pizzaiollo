import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getItem } from '../data/menu.js'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('adp-cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('adp-cart', JSON.stringify(items))
    } catch {}
  }, [items])

  const value = useMemo(() => {
    const add = (id, size = 'L') => {
      setItems((prev) => {
        const found = prev.find((i) => i.id === id && i.size === size)
        if (found) return prev.map((i) => (i.id === id && i.size === size ? { ...i, qty: i.qty + 1 } : i))
        return [...prev, { id, size, qty: 1 }]
      })
    }
    const dec = (id, size) => {
      setItems((prev) =>
        prev.flatMap((i) => (i.id === id && i.size === size ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i]))
      )
    }
    const remove = (id, size) => setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)))
    const clear = () => setItems([])

    const lines = items
      .map((i) => {
        const item = getItem(i.id)
        if (!item) return null
        const unit = i.size === 'XL' ? item.xl : item.l
        return { ...i, item, unit, total: unit * i.qty }
      })
      .filter(Boolean)

    const count = items.reduce((s, i) => s + i.qty, 0)
    const total = lines.reduce((s, l) => s + l.total, 0)

    return {
      items,
      lines,
      count,
      total,
      add,
      dec,
      remove,
      clear,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
    }
  }, [items, drawerOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}

/* Construit le message WhatsApp pré-rempli */
export function buildOrderMessage({ lines, total, info, lang, cur }) {
  const nameLine = lang === 'ar' ? 'الاسم' : 'Nom'
  const phoneLine = lang === 'ar' ? 'الهاتف' : 'Téléphone'
  const modeLine = lang === 'ar' ? 'الطريقة' : 'Mode'
  const branchLine = lang === 'ar' ? 'الفرع' : 'Atelier'
  const addrLine = lang === 'ar' ? 'العنوان' : 'Adresse'
  const noteLine = lang === 'ar' ? 'ملاحظة' : 'Remarque'
  const totalLine = lang === 'ar' ? 'المجموع' : 'Total'
  const hello = lang === 'ar' ? 'مرحباً لاتوليي دو بيتزايولو 🍕 أريد الطلب:' : 'Bonjour L’Atelier du Pizzaiolo 🍕 Je souhaite commander :'
  const mode = info.mode === 'delivery' ? (lang === 'ar' ? 'توصيل' : 'Livraison') : lang === 'ar' ? 'سفري' : 'À emporter'

  const linesTxt = lines
    .map((l) => `• ${l.qty}× ${l.item.name[lang] ?? l.item.name.fr} (${l.size}) — ${l.total} ${cur}`)
    .join('\n')

  let msg = `${hello}\n${linesTxt}\n${totalLine} : ${total} ${cur}\n—\n${nameLine} : ${info.name}\n${phoneLine} : ${info.phone}\n${modeLine} : ${mode}\n${branchLine} : ${info.branchName}`
  if (info.mode === 'delivery' && info.address) msg += `\n${addrLine} : ${info.address}`
  if (info.note) msg += `\n${noteLine} : ${info.note}`
  return msg
}

export function buildContactMessage({ name, phone, message }, lang) {
  const head = lang === 'ar' ? `مرحباً! أنا ${name}` : `Bonjour ! Je suis ${name}`
  const phoneLine = phone ? (lang === 'ar' ? `هاتفي: ${phone}` : `Mon téléphone : ${phone}`) : ''
  return [head, phoneLine, message].filter(Boolean).join('\n')
}
