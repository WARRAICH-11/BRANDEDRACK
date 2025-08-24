import React, { Suspense, lazy } from 'react'

const Shirts = lazy(() => import('./pages/Shirts'));
const Wallets = lazy(() => import('./pages/Wallets'));
const Watches = lazy(() => import('./pages/Watches'));
const Eyewear = lazy(() => import('./pages/Eyewear'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const ShippingInfo = lazy(() => import('./pages/ShippingInfo'));
const ReturnsExchanges = lazy(() => import('./pages/ReturnsExchanges'));
const FAQ = lazy(() => import('./pages/FAQ'));
const MyAccount = lazy(() => import('./pages/MyAccount'));
const OrderHistory = lazy(() => import('./pages/OrderHistory'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Newsletter = lazy(() => import('./pages/Newsletter'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<div className='p-8 text-center'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/eyewear" element={<Eyewear />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/shipping-info" element={<ShippingInfo />} />
            <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
