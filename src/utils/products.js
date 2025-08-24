// src/utils/products.js
// Centralized product data for the store

export const products = [
  { id: 'shirt1', title: 'Premium Cotton Shirt', price: 129, img: '/assets/shirts1.jpg', description: 'A premium cotton shirt for all occasions.' },
  { id: 'shirt2', title: 'Slim Fit Dress Shirt', price: 159, img: '/assets/shirts2.jpg', description: 'Slim fit, sharp look, all-day comfort.' },
  { id: 'shirt3', title: 'Casual Button Down', price: 119, img: '/assets/shirts3.jpg', description: 'Relaxed and stylish, perfect for weekends.' },
  { id: 'wallet1', title: 'Luxury Leather Wallet', price: 199, img: '/assets/wallets1.jpg', description: 'Handcrafted from genuine leather.' },
  { id: 'watch1', title: 'Sports Chronograph Watch', price: 349, img: '/assets/watches1.jpg', description: 'Precision timekeeping for the modern man.' },
  { id: 'eyewear1', title: 'Classic Aviator Eyewear', price: 99, img: '/assets/eyewear1.jpg', description: 'Timeless aviator style sunglasses.' }
]

export function getProductById(id) {
  return products.find(p => p.id === id)
}
