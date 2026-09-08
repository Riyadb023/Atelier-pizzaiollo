import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LangProvider } from './i18n.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import MobileBar from './components/MobileBar.jsx'
import Home from './pages/Home.jsx'
import MenuPage from './pages/Menu.jsx'
import Restaurants from './pages/Restaurants.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Order from './pages/Order.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <LangProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="app-shell">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/commander" element={<Order />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <CartDrawer />
            <MobileBar />
          </div>
        </BrowserRouter>
      </CartProvider>
    </LangProvider>
  )
}
