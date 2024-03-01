import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  Cart,
  CartList,
  IChecked,
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
      const { id, totalPrice, title, image, price, brand } = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);

      if (existingItem) {
        const abc = state.cartItem.map((item) => {
          const { quantity, price } = item;
          const newQuantity = quantity + 1;

          if (item.id === id) {
            return {
              id: item.id,
              title: item.title,
              image: item.image,
              quantity: newQuantity,
              totalPrice: price * newQuantity,
              price: item.price,
              brand: item.brand,
            };
          }
          // console.log(item);
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
          brand: brand,
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
              brand: item.brand,
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
    filterItem: (state, action: PayloadAction<IChecked>) => {
      const { brand } = action.payload;
      const filterItem = state.cartItem.filter((item) => item.brand === brand);
      state.cartItem = [...filterItem];
      console.log(filterItem);
    },
  },
});

export const { addToCart, subtractCart, deleteCartItem, filterItem } =
  cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart.cartItem;

export default cartSlice.reducer;
