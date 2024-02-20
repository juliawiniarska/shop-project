import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber, brand, category }) => ({
        url: PRODUCTS_URL,
        params: { keyword, pageNumber, brand, category },
      }),
      providesTags: ['Products'],
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: (productData) => ({
        url: PRODUCTS_URL,
        method: 'POST',
        body: productData,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    getTopProducts: builder.query({
      query: () => `${PRODUCTS_URL}/top`,
      keepUnusedDataFor: 5,
    }),
    getProductsByCategory: builder.query({
    query: ({ category, sort, pageNumber }) => ({
      url: `${PRODUCTS_URL}/category/${category}`,
      params: { sort, pageNumber },
    }),
    providesTags: ['Products'],
  }),
  getProductsByBrand: builder.query({
    query: ({ brand, sort, pageNumber }) => ({
      url: `${PRODUCTS_URL}/brand/${brand}`,
      params: { sort, pageNumber },
    }),
    providesTags: ['Products'],
  }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByBrandQuery
} = productsApiSlice;
