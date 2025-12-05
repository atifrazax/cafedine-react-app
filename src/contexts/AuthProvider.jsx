import { createContext, useEffect, useState } from "react";
import getUser from "../utils/getUser";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [cart, setCart] = useState(()=> JSON.parse(localStorage.getItem('cart')) || []);
  const [coupon, setCoupon] = useState(null);

  const addToCart = (newItem) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item._id === newItem._id);
      if (existing) {
        const updated = prevCart.map(item => item._id === newItem._id ? {...item, qty: item.qty + 1} : item);
        return updated;
      } else {
        return [...prevCart, {...newItem, qty: 1}];
      }
    }
    );
  };
  const updateCart = (id, qty) => {
      setCart(prevCart => prevCart.map(item => item._id === id ? {...item, qty: Math.max(1, qty)} : item));
  }
  const clearCart = () => setCart([]);
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item._id !== id));
  }
  const updateCoupon = (coupon) => {
    setCoupon(coupon);
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getUser(setUser);
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, cart, addToCart, updateCart, removeFromCart, clearCart, coupon, updateCoupon }}>
      {children}
    </AuthContext.Provider>
  );
}
 export {AuthProvider, AuthContext};