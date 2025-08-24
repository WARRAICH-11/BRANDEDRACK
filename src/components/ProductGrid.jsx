import React from 'react'

export default function ProductGrid({ products, onProductClick }) {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer" onClick={() => onProductClick(product.id)}>
            <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-pink-500 font-bold text-xl">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
