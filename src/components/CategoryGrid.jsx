import React from 'react'

export default function CategoryGrid({ categories }) {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <img src={cat.img} alt={cat.title} className="w-20 h-20 object-contain mb-4" />
            <span className="text-lg font-semibold text-gray-800">{cat.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
