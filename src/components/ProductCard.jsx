import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCardInner({ product, addItem, onClick }) {
  return (
    <div
      className="bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition cursor-pointer border border-pink-200"
      onClick={() => onClick(product.id)}
      tabIndex={0}
      aria-label={`View details for ${product.title}`}
      role="button"
      onKeyPress={e => { if (e.key === 'Enter') onClick(product.id) }}
    >
      <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-pink-500 font-bold text-xl">${product.price}</p>
          <button onClick={(e) => { e.preventDefault(); addItem(product, 1) }} className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition duration-300">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(function ProductCard({ product }) {
  const { addItem } = useCart()
  return <ProductCardInner product={product} addItem={addItem} />
})
