import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "./fetchBase";
import { ICategories } from "~/interfaces/categories";
import { IUser } from "~/interfaces/user";
import { IProducts } from "~/interfaces/products";
import { IPostRecipe } from "~/interfaces/postRecipe";

export const apiCaller = createApi({
  reducerPath: "apiCaller",
  refetchOnMountOrArgChange: 30,
  baseQuery: customBaseQuery(),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    /**
     * truyền kiểu dữ liệu cho các endpoint <'response trả về', 'kiểu tuyền vào'>
     */
    // Hook CallApi-User
    getExample: builder.query<IUser[], void>({
      query() {
        return {
          url: `/userAccount`,
          method: "GET",
        };
      },
      providesTags: [{ type: "Posts" }],
    }),

    /**
     * Dùng mutation đối với các trường hợp POST, PUT, DELETE
     * POST là response trả về và Omit<POST, 'id'> là body gửi lên
     */
    addExample: builder.mutation<IUser, Omit<IUser, "id">>({
      query(body) {
        return {
          url: `/users`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Posts" }],
    }),

    getUsers: builder.query<IUser, number>({
      query(id) {
        return `users/${id}`;
      },
    }),

    updateExample: builder.mutation<IUser[], { id: number; body: IUser }>({
      query(data) {
        return {
          url: `/users/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: [{ type: "Posts" }],
    }),
    deleteExample: builder.mutation<IUser, { id: number }>({
      query(data) {
        return {
          url: `/users/${data.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Posts" }],
    }),

    // Hook CallApi-Categories
    getCategory: builder.query<ICategories[], void>({
      query() {
        return {
          url: `/categories`,
          method: "GET",
        };
      },
      providesTags: [{ type: "Posts" }],
    }),

    //Hook CallApi - productItem
    getProductItem: builder.query<IProducts[], void>({
      query() {
        return {
          url: `/products`,
          method: "GET",
        };
      },
      providesTags: [{ type: "Posts" }],
    }),

    getProductById: builder.query<IProducts[], { id: number }>({
      query(data) {
        return {
          url: `/products/${data.id}`,
          method: "GET",
        };
      },
    }),

    //Hook Search
    getProductWithSearch: builder.query<IProducts[], string>({
      query: (item) => `/products?q=${item}`,
      providesTags: [{ type: "Posts" }],
    }),

    //Hook CallApi - postRecipe
    getPostRecipe: builder.query<IPostRecipe[], void>({
      query() {
        return {
          url: `/recipe`,
          method: "GET",
        };
      },
      providesTags: [{ type: "Posts" }],
    }),
  }),
});

export const {
  useGetExampleQuery,
  useAddExampleMutation,
  useUpdateExampleMutation,
  useLazyGetExampleQuery,
  useDeleteExampleMutation,
  useGetCategoryQuery,
  useGetProductItemQuery,
  useGetProductByIdQuery,
  useGetProductWithSearchQuery,
  useGetPostRecipeQuery,
} = apiCaller;
