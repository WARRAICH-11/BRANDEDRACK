import React from 'react'

export default function CategoryCard({ img, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
      <img src={img} alt={title} className="w-20 h-20 object-contain mb-4" />
      <span className="text-lg font-semibold text-gray-800">{title}</span>
    </div>
  )
}
