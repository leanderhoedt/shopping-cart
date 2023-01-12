import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {AppState} from './';

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  inStock: number;
}

// Type for our state
export interface CartState {
  cart: CartItem[];
}

// Initial state
const initialState: CartState = {
  cart: [
    {
      id: '1',
      quantity: 1,
      price: 50,
      inStock: 5,
    }
  ],
};

// Actual Slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cart.push({id: `${state.cart.length + 1}`, quantity: 1, price: 50, inStock: 5});
    },
    incrementQuantity: (state, {payload: {id} = {}}) => {
      const itemInCart = state.cart.find((item) => item.id === id);
      if (itemInCart && itemInCart.quantity < 5) {
        itemInCart && itemInCart.quantity++;
      }
    },
    decrementQuantity: (state, {payload: {id} = {}}) => {
      const itemInCart = state.cart.find((item) => item.id === id);
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity--;
      }
    },
    setQuantity: (state, {payload: {id, quantity} = {}}) => {
      const itemInCart = state.cart.find((item) => item.id === id);
      if (itemInCart && quantity > 0 && quantity <= 5) {
        itemInCart.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.cart,
        };
      },
    },

  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  removeFromCart
} = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart;

export default cartSlice.reducer;
