import React, { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Hero3D from '../components/Hero3D'
import CategoryGrid from '../components/CategoryGrid'
import ProductGrid from '../components/ProductGrid'
const LenixCanvas = lazy(() => import('../components/LenixCanvas'))

import { products } from '../utils/products'
const heroImage = `${import.meta.env.BASE_URL}assets/HERO.png`;
const shirtsImg = `${import.meta.env.BASE_URL}assets/shirts1.jpg`;
const walletsImg = `${import.meta.env.BASE_URL}assets/wallets1.jpg`;
const watchesImg = `${import.meta.env.BASE_URL}assets/watches1.jpg`;
const eyewearImg = `${import.meta.env.BASE_URL}assets/eyewear1.jpg`;


export default function Home() {
  const categories = [
    { id: 'shirts', title: 'Shirts', img: shirtsImg },
    { id: 'wallets', title: 'Wallets', img: walletsImg },
    { id: 'watches', title: 'Watches', img: watchesImg },
    { id: 'eyewear', title: 'Eyewear', img: eyewearImg },
  ];
  const navigate = useNavigate();
  return (
    <div>
      {/* hero */}
      <section className="h-[95vh] min-h-[700px] flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <img 
          src={heroImage} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-indigo-700/30 to-black/80 animate-gradient-move"></div>
        {/* Animated Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg className="w-full h-full" style={{position:'absolute',top:0,left:0}}>
            <circle className="animate-pulse" cx="20%" cy="30%" r="18" fill="#fff3" />
            <circle className="animate-ping" cx="70%" cy="55%" r="10" fill="#a5b4fc77" />
            <circle className="animate-pulse" cx="50%" cy="80%" r="8" fill="#818cf888" />
            <circle className="animate-pulse" cx="85%" cy="25%" r="12" fill="#fff2" />
          </svg>
        </div>
        <div className="relative z-20 flex flex-col items-center text-center text-white px-8 w-full h-full pt-16 md:pt-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 brand-font drop-shadow-lg animate-fade-in tracking-tight">BRANDEDRACK</h1>
            <p className="text-2xl md:text-3xl mb-8 animate-fade-in delay-150 font-semibold">Elevate Your Look. Own Your Style.</p>
            <a href="/products" className="bg-white/90 text-black px-10 py-4 rounded-full font-bold shadow-lg hover:bg-indigo-100 hover:scale-105 transition-all duration-300 inline-flex items-center animate-fade-in delay-300">
              Shop Now <i className="fas fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
        }
        .animate-fade-in.delay-150 { animation-delay: 0.15s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>

      {/* Animated Parallax Section */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full z-0">
          <img src="/BRANDEDRACK/assets/watches1.jpg" alt="Watches" className="object-cover w-1/2 h-full opacity-30 absolute left-0 top-0 parallax" style={{transform: 'translateY(0px)'}}/>
          <img src="/BRANDEDRACK/assets/eyewear1.jpg" alt="Eyewear" className="object-cover w-1/2 h-full opacity-20 absolute right-0 top-0 parallax" style={{transform: 'translateY(0px)'}}/>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Discover the Craft of Modern Fashion</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 animate-fade-in delay-150">At <span className="font-extrabold text-indigo-700">BRANDEDRACK</span>, every piece is designed to elevate your lifestyle. Experience the fusion of quality, comfort, and style.</p>
          <div className="flex justify-center gap-8 mt-10 animate-fade-in delay-300">
            <img src="/BRANDEDRACK/assets/shirts1.jpg" alt="Shirts" className="rounded-xl shadow-lg w-48 h-48 object-cover border-4 border-indigo-100 hover:scale-105 transition-transform duration-300" />
            <img src="/BRANDEDRACK/assets/wallets1.jpg" alt="Wallets" className="rounded-xl shadow-lg w-48 h-48 object-cover border-4 border-indigo-100 hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Animated Testimonial/Brand Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-900 animate-fade-in">Why Shop at <span className="brand-font">BRANDEDRACK</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-400 animate-fade-in delay-150">
              <span className="text-5xl mb-4 block">🌟</span>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p>Handpicked fabrics and materials for unmatched comfort and durability.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-400 animate-fade-in delay-300">
              <span className="text-5xl mb-4 block">🚚</span>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p>Swift, reliable shipping to get your style to your door, fast.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-indigo-400 animate-fade-in delay-450">
              <span className="text-5xl mb-4 block">💬</span>
              <h3 className="font-bold text-lg mb-2">Customer Support</h3>
              <p>Our team is here for you 24/7—before, during, and after your purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D canvas (lazy-loaded) */}
      <Hero3D />

      {/* categories */}
      <CategoryGrid categories={categories} />

      {/* products preview */}
      <ProductGrid products={products} onProductClick={id => navigate(`/product/${id}`)} />
    </div>
  )
}
