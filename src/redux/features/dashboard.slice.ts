import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  Cart,
  CartList,
  IProductsData,
  IProductsSearch,
} from "~/interfaces/products";

export interface CartState {
  cartItem: IProductsData[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  cartItem: [],
  // value: 0,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },

    addToCart: (state, action: PayloadAction<IProductsData>) => {
      const { id, totalPrice, title, image, price } = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);

      // state.totalQuantity++;
      // state.totalPrice += totalPrice;

      if (existingItem) {
        const abc = state.cartItem.map((item) => {
          const { quantity, price } = item;
          const newQuantity = quantity + 1;
          // console.log(newQuantity, totalPrice);

          if (item.id === id) {
            return {
              id: item.id,
              title: item.title,
              image: item.image,
              quantity: newQuantity,
              totalPrice: price * newQuantity,
              price: item.price,
            };
          }
          console.log(item);
          return item;
        });
        state.cartItem = [...abc];
      } else {
        state.cartItem.push({
          id: id,
          title: title,
          image: image,
          quantity: 1,
          totalPrice: totalPrice,
          price: price,
        });
      }
    },

    subtractCart: (state, action: PayloadAction<CartList>) => {
      const { id } = action.payload;
      const subtractItem = state.cartItem.find((item) => item.id === id);
      const removeItem = state.cartItem.filter((item) => item.id !== id);
      // state.totalQuantity--;
      // state.totalPrice -= totalPrice;

      if (subtractItem && subtractItem.quantity !== 1) {
        const abc = state.cartItem.map((item) => {
          const { quantity, price } = item;
          const newQuantity = quantity - 1;
          // console.log(newQuantity, totalPrice);

          if (item.id === id) {
            return {
              id: item.id,
              title: item.title,
              image: item.image,
              quantity: newQuantity,
              totalPrice: price * newQuantity,
              price: item.price,
            };
          }
          return item;
        });
        state.cartItem = [...abc];
      } else {
        state.cartItem = removeItem;
      }
    },

    deleteCartItem: (state, action: PayloadAction<Cart>) => {
      const { id, totalPrice } = action.payload;
      const deleteCart = state.cartItem.filter((item) => item.id !== id);
      state.cartItem = deleteCart;
      state.totalPrice -= totalPrice;
    },

    searchItem: (state, action: PayloadAction<IProductsSearch>) => {
      const { title } = action.payload;
      const searchItem = state.cartItem.filter((item) => item.title === title);
      state.cartItem = searchItem;
    },
  },
});

export const { subtractCart, addToCart, deleteCartItem } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart.cartItem;

export default cartSlice.reducer;
