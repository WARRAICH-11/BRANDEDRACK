import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getProductById } from '../utils/products'

export default function Product(){
  const { id } = useParams()
  const { addItem } = useCart()
  const p = getProductById(id)
  if (!p) return <div className="container mx-auto px-4 py-12">Product not found.</div>
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex flex-col items-center md:items-start">
          <img src={p.img} alt={p.title} className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200 mb-6" />
        </div>
        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-3 brand-font tracking-tight">{p.title}</h1>
          <div className="flex items-center mb-3">
            <span className="text-yellow-400 text-xl mr-2">★★★★★</span>
            <span className="text-gray-600 text-sm">(23 reviews)</span>
          </div>
          <div className="text-3xl font-bold mb-6 text-indigo-700">${p.price}</div>
          <p className="text-lg text-gray-700 mb-6">{p.description}</p>
          <button className="bg-black hover:bg-indigo-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition duration-200 mb-4 w-full md:w-auto" onClick={() => addItem(p, 1)}>
            Add to Cart
          </button>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="mt-16 max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className="flex items-center mb-1">
              <span className="text-yellow-400 mr-2">★★★★★</span>
              <span className="font-semibold">John D.</span>
              <span className="ml-2 text-gray-400 text-xs">Aug 2025</span>
            </div>
            <div className="text-gray-700">Absolutely love this product! The quality is top-notch and shipping was fast.</div>
          </div>
          <div className="border-b pb-4">
            <div className="flex items-center mb-1">
              <span className="text-yellow-400 mr-2">★★★★★</span>
              <span className="font-semibold">Sarah W.</span>
              <span className="ml-2 text-gray-400 text-xs">Aug 2025</span>
            </div>
            <div className="text-gray-700">Looks even better in person. Will definitely buy again from BRANDEDRACK!</div>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <span className="text-yellow-400 mr-2">★★★★☆</span>
              <span className="font-semibold">Ali K.</span>
              <span className="ml-2 text-gray-400 text-xs">Jul 2025</span>
            </div>
            <div className="text-gray-700">Great product, but wish there were more color options.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
