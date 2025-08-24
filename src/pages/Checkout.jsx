import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { createMockPaymentIntent, confirmMockPayment } from '../utils/mockStripe'

const stripePromise = loadStripe('pk_test_mocked') // mock publishable key

function CheckoutForm() {
  const { items, total, clearCart } = useCart()
  const stripe = useStripe()
  const elements = useElements()
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)
  const [fields, setFields] = useState({ first: '', last: '', email: '', address: '' })

  const handleInput = e => {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (!fields.first || !fields.last || !fields.email || !fields.address) return 'All fields are required.'
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(fields.email)) return 'Invalid email.'
    if (!items.length) return 'Cart is empty.'
    return null
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError(null)
    const v = validate()
    if (v) return setError(v)
    setStatus('processing')
    try {
      const { client_secret } = await createMockPaymentIntent(total)
      const card = elements.getElement(CardElement)
      await confirmMockPayment(client_secret, card)
      setStatus('success')
      clearCart()
    } catch (err) {
      setStatus('failed')
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="bg-white rounded-lg p-6">
          <h3 className="font-semibold mb-4">Billing Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="first" value={fields.first} onChange={handleInput} placeholder="First name" className="border p-3 rounded" />
            <input name="last" value={fields.last} onChange={handleInput} placeholder="Last name" className="border p-3 rounded" />
            <input name="email" value={fields.email} onChange={handleInput} placeholder="Email" className="border p-3 rounded col-span-2" />
            <input name="address" value={fields.address} onChange={handleInput} placeholder="Address" className="border p-3 rounded col-span-2" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6">
        <h3 className="font-semibold mb-4">Payment</h3>
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Mock Card</div>
          <div className="bg-gray-100 p-3 rounded">4242 4242 4242 4242 — Any future expiry — Any CVC</div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between"><span>Subtotal</span><span>${total}</span></div>
          <div className="flex justify-between"><strong>Total</strong><strong>${total}</strong></div>
        </div>
        <div className="mb-4">
          <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
        </div>
        <button disabled={status==='processing'} type="submit" className="w-full bg-pink-200 text-black px-4 py-3 rounded-full font-semibold">
          {status==='processing' ? 'Processing...' : `Pay $${total || 0}`}
        </button>
        {error && <div className="mt-4 text-red-600">{error}</div>}
        {status === 'success' && <div className="mt-4 text-green-600">Payment successful — thank you!</div>}
        {status === 'failed' && <div className="mt-4 text-red-600">Payment failed — please try again.</div>}
      </div>
    </form>
  )
}

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
