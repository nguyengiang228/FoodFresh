import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProductsData } from "~/interfaces/products";

export interface Card {
  id: number;
  price: number;
  quantity: number;
  totalPrice: number;
  title: string;
}

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
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.totalPrice += newItem.totalPrice;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.totalPrice;
      } else {
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.totalPrice,
          price: newItem.price,
        });
      }
    },
    removeCartItem: (state, action: PayloadAction<Card>) => {
      const { id } = action.payload;
      const deleteCart = state.cartItem.filter((item) => item.id === id);
      state.cartItem = deleteCart;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart.cartItem;

export default cartSlice.reducer;
