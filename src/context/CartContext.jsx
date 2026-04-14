import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('spices-cart', []);

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [...current, { ...product, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartCount,
      cartTotal,
    }),
    [cartItems, cartCount, cartTotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
