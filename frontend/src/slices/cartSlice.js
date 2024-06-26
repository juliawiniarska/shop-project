import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
<<<<<<< HEAD
  : { 
      cartItems: [], 
      shippingAddress: {}, 
      paymentMethod: 'PayPal', 
      itemsPrice: 0, 
      shippingPrice: 0, 
      taxPrice: 0, 
      totalPrice: 0, 
      guestInfo: null 
    };
=======
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal', itemsPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0 };

>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { user, rating, numReviews, reviews, ...item } = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state, item);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
<<<<<<< HEAD
    setGuestInfo: (state, action) => {
      state.guestInfo = action.payload;
      localStorage.setItem('cart', JSON.stringify(state)); 
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      state.guestInfo = null; 
=======
    clearCartItems: (state, action) => {
      state.cartItems = [];
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
      localStorage.setItem('cart', JSON.stringify(state));
    },
    resetCart: (state) => (state = initialState),
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
<<<<<<< HEAD
  setGuestInfo, 
=======
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
  clearCartItems,
  resetCart,
} = cartSlice.actions;

<<<<<<< HEAD
export default cartSlice.reducer;
=======
export default cartSlice.reducer;
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
