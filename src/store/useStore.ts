import { create } from 'zustand';

export interface CartItem {
  id: string | number;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

interface AppState {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, qty: number) => void;
}

export const useStore = create<AppState>((set) => ({
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  cartItems: [],
  addToCart: (item) => set((state) => {
    const existing = state.cartItems.find(i => i.id === item.id && i.size === item.size);
    if (existing) {
      return {
        cartItems: state.cartItems.map(i => 
          i.id === item.id && i.size === item.size 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        )
      };
    }
    return { cartItems: [...state.cartItems, item] };
  }),
  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(i => i.id !== id)
  })),
  updateQuantity: (id, qty) => set((state) => ({
    cartItems: state.cartItems.map(i => i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)
  }))
}));
