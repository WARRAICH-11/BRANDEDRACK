import React from 'react'

export default function Hero3D() {
  return (
    <section className="w-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* TODO: Replace with LenixCanvas 3D pastel scene */}
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 drop-shadow-lg mb-4">Futuristic Pastel Store</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8">Shop the latest in minimal, hyper-realistic 3D fashion</p>
        <button className="px-8 py-3 rounded-full bg-pink-400 text-white font-semibold shadow-lg hover:bg-pink-500 transition">Shop Now</button>
      </div>
      {/* 3D Canvas Placeholder */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        {/* LenixCanvas will go here */}
      </div>
    </section>
  )
}
