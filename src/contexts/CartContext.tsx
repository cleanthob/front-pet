import { createContext, type ReactNode, useEffect, useState } from "react";
import type { ProductProps } from "../pages/Home";

interface CartContextData {
  cartItems: CartItem[];
  addToCart: (item: ProductProps) => void;
  removeFromCart: (item: ProductProps) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

interface CartItem extends ProductProps {
  quantity: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storage = localStorage.getItem("@cartItems");

    return storage ? JSON.parse(storage) : [];
  });

  const addToCart = (item: ProductProps) => {
    const isItemInCart = cartItems.find(
      (cartItem: ProductProps) => cartItem.id === item.id,
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: ProductProps) => {
    const isItemInCart = cartItems.find(
      (cartItem: ProductProps) => cartItem.id === item.id,
    );

    if (isItemInCart?.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        }),
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  useEffect(() => {
    localStorage.setItem("@cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
