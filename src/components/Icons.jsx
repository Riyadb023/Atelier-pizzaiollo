import React from 'react'

const S = ({ children, size = 20, fill = 'none', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill === 'none' ? 'currentColor' : 'none'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    {children}
  </svg>
)

export const IconScooter = (p) => (
  <S {...p}>
    <circle cx="6.5" cy="17" r="2.6" />
    <circle cx="17.5" cy="17" r="2.6" />
    <path d="M9.1 17h5.8M17.5 14.4 15.8 7.5h-3.1M12.2 10.5H8.4L6.9 14.5" />
    <path d="M14.5 7.5h2.6" />
  </S>
)
export const IconBag = (p) => (
  <S {...p}>
    <path d="M6.2 7.5h11.6l1 13H5.2l1-13z" />
    <path d="M9 7.5a3 3 0 0 1 6 0" />
  </S>
)
export const IconStar = ({ size = 15, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.5l2.8 6.3 6.9.7-5.2 4.6 1.5 6.8-6-3.6-6 3.6 1.5-6.8L2.3 9.5l6.9-.7z" />
  </svg>
)
export const IconPhone = (p) => (
  <S {...p}>
    <path d="M5 4h4l2 5-2.4 1.6a12.5 12.5 0 0 0 4.8 4.8L11 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" transform="translate(1 0)" />
  </S>
)
export const IconWhatsApp = ({ size = 20, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 0 1 12 4zm-3.2 4.2c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2s.9 2.3 1 2.4c.1.2 1.8 2.8 4.4 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3-1.5-.7c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4z" />
  </svg>
)
export const IconPin = (p) => (
  <S {...p}>
    <path d="M12 21.5s7-6.4 7-11.3a7 7 0 1 0-14 0c0 4.9 7 11.3 7 11.3z" />
    <circle cx="12" cy="10" r="2.6" />
  </S>
)
export const IconClock = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </S>
)
export const IconInstagram = (p) => (
  <S {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </S>
)
export const IconFlame = (p) => (
  <S {...p}>
    <path d="M12 3s5.5 4.8 5.5 9.4a5.5 5.5 0 0 1-11 0c0-2 .9-3.8 2-5.1.3 1.2 1 2.1 2 2.2C10.4 7 11.6 5 12 3z" />
  </S>
)
export const IconWheat = (p) => (
  <S {...p}>
    <path d="M12 21V8" />
    <path d="M12 8c0-3 1.8-5 4-5 0 3-1.8 5-4 5zM12 8c0-3-1.8-5-4-5 0 3 1.8 5 4 5zM12 13c0-3 1.8-5 4-5 0 3-1.8 5-4 5zM12 13c0-3-1.8-5-4-5 0 3 1.8 5 4 5zM12 18c0-3 1.8-5 4-5 0 3-1.8 5-4 5zM12 18c0-3-1.8-5-4-5 0 3 1.8 5 4 5z" />
  </S>
)
export const IconCheese = (p) => (
  <S {...p}>
    <path d="M3 11.2 16 5.5a5 5 0 0 1 5 5V19H3v-7.8z" />
    <circle cx="9" cy="13.5" r="1.4" />
    <circle cx="15" cy="15.5" r="1.1" />
  </S>
)
export const IconHalal = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.3 12.2 2.5 2.5 4.9-5" />
  </S>
)
export const IconCheck = (p) => (
  <S {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </S>
)
export const IconPlus = (p) => (
  <S {...p}>
    <path d="M12 5v14M5 12h14" />
  </S>
)
export const IconX = (p) => (
  <S {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </S>
)
export const IconArrow = (p) => (
  <S {...p}>
    <path d="M4 12h15M13.5 6l6 6-6 6" />
  </S>
)
export const IconSearch = (p) => (
  <S {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </S>
)
export const IconBurger = (p) => (
  <S {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </S>
)
