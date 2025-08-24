import React, { createContext, useContext, useReducer, useMemo } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action){
  switch(action.type){
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.item.id)
      let items
      if (existing){
        items = state.items.map(i => i.id === action.item.id ? { ...i, qty: i.qty + (action.qty||1) } : i)
      } else {
        items = [...state.items, { ...action.item, qty: action.qty||1 }]
      }
      return { ...state, items }
    }
    case 'REMOVE': {
      const items = state.items.filter(i => i.id !== action.id)
      return { ...state, items }
    }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const addItem = (item, qty = 1) => dispatch({ type: 'ADD', item, qty })
  const removeItem = (id) => dispatch({ type: 'REMOVE', id })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  const count = useMemo(() => state.items.reduce((s, i) => s + i.qty, 0), [state.items])
  const total = useMemo(() => state.items.reduce((s, i) => s + (i.price * i.qty), 0), [state.items])

  const value = useMemo(() => ({ items: state.items, addItem, removeItem, clearCart, count, total }), [state.items, count, total])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(){
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
