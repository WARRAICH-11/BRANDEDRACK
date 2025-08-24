import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { count } = useCart()
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold brand-font text-black">BRANDEDRACK</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-black transition duration-300">All Products</Link>
            <Link to="/shirts" className="text-gray-700 hover:text-black transition duration-300">Shirts</Link>
            <Link to="/wallets" className="text-gray-700 hover:text-black transition duration-300">Wallets</Link>
            <Link to="/watches" className="text-gray-700 hover:text-black transition duration-300">Watches</Link>
            <Link to="/eyewear" className="text-gray-700 hover:text-black transition duration-300">Eyewear</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-black transition duration-300">
            <i className="fas fa-search text-xl"></i>
          </button>
          <Link to="/cart" className="p-2 text-gray-600 hover:text-black relative transition duration-300" aria-label="View cart">
            <i className="fas fa-shopping-bag text-xl" aria-hidden="true"></i>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cart-badge">{count}</span>
            )}
          </Link>
          <button className="md:hidden p-2 text-gray-600 hover:text-black transition duration-300">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
