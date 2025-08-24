import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart(){
  const { items, removeItem, clearCart, total } = useCart()
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {items.length === 0 ? (
        <div>
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/products" className="bg-black text-white px-6 py-3 rounded-full">Shop Products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {items.map(i => (
              <div key={i.id} className="flex items-center bg-white rounded-lg p-4 mb-4 shadow">
                <img src={i.img} alt={i.title} className="w-24 h-24 object-cover rounded" />
                <div className="ml-4 flex-1">
                  <h4 className="font-semibold">{i.title}</h4>
                  <div className="text-gray-600">Qty: {i.qty}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">${i.price * i.qty}</div>
                  <button onClick={()=>removeItem(i.id)} className="text-sm text-red-500 mt-2">Remove</button>
                </div>
              </div>
            ))}
            <button onClick={clearCart} className="text-sm text-gray-600">Clear Cart</button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2"><span>Subtotal</span><span>${total}</span></div>
            <div className="flex justify-between mb-4"><span>Shipping</span><span>Free</span></div>
            <Link to="/checkout" className="block bg-pink-200 text-black text-center px-4 py-3 rounded-full font-semibold">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  )
}
