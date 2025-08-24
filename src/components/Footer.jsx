import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 brand-font">BRANDEDRACK</h3>
            <p className="text-gray-400 mb-4">Premium men's fashion and accessories for the modern gentleman.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook text-xl"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition duration-300">All Products</Link></li>
              <li><Link to="/products#new-arrivals" className="text-gray-400 hover:text-white transition duration-300">New Arrivals</Link></li>
              <li><Link to="/products#best-sellers" className="text-gray-400 hover:text-white transition duration-300">Best Sellers</Link></li>
              <li><Link to="/products#sale-items" className="text-gray-400 hover:text-white transition duration-300">Sale Items</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
              <li><Link to="/shipping-info" className="text-gray-400 hover:text-white transition duration-300">Shipping Info</Link></li>
              <li><Link to="/returns-exchanges" className="text-gray-400 hover:text-white transition duration-300">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition duration-300">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link to="/my-account" className="text-gray-400 hover:text-white transition duration-300">My Account</Link></li>
              <li><Link to="/order-history" className="text-gray-400 hover:text-white transition duration-300">Order History</Link></li>
              <li><Link to="/wishlist" className="text-gray-400 hover:text-white transition duration-300">Wishlist</Link></li>
              <li><Link to="/newsletter" className="text-gray-400 hover:text-white transition duration-300">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2023 BRANDEDRACK. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300 text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition duration-300 text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition duration-300 text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
