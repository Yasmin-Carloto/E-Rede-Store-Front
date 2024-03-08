import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item) => {
    setCart((prevCart) => {
      return [...prevCart, item]
    })
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}