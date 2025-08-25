// src/utils/products.js
// Centralized product data for the store

// Product images from public directory
const shirt1Img = '/assets/shirts1.jpg';
const shirt2Img = '/assets/shirts2.jpg';
const shirt3Img = '/assets/shirts3.jpg';
const wallet1Img = '/assets/wallets1.jpg';
const watch1Img = '/assets/watches1.jpg';
const eyewear1Img = '/assets/eyewear1.jpg';

export const products = [
  { 
    id: 'shirt1', 
    title: 'Premium Cotton Shirt', 
    price: 129, 
    img: shirt1Img, 
    description: 'A premium cotton shirt for all occasions.' 
  },
  { 
    id: 'shirt2', 
    title: 'Slim Fit Dress Shirt', 
    price: 159, 
    img: shirt2Img, 
    description: 'Slim fit, sharp look, all-day comfort.' 
  },
  { 
    id: 'shirt3', 
    title: 'Casual Button Down', 
    price: 119, 
    img: shirt3Img, 
    description: 'Relaxed and stylish, perfect for weekends.' 
  },
  { 
    id: 'wallet1', 
    title: 'Luxury Leather Wallet', 
    price: 199, 
    img: wallet1Img, 
    description: 'Handcrafted from genuine leather.' 
  },
  { 
    id: 'watch1', 
    title: 'Sports Chronograph Watch', 
    price: 349, 
    img: watch1Img, 
    description: 'Precision timekeeping for the modern man.' 
  },
  { 
    id: 'eyewear1', 
    title: 'Classic Aviator Eyewear', 
    price: 99, 
    img: eyewear1Img, 
    description: 'Timeless aviator style sunglasses.' 
  }
]

export function getProductById(id) {
  return products.find(p => p.id === id)
}
