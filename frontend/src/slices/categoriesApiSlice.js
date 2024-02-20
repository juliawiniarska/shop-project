import { CATEGORIES_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: CATEGORIES_URL,
      }),
      providesTags: ['Categories'],
      keepUnusedDataFor: 5,
    }),
    getCategoryDetails: builder.query({
      query: (categoryId) => ({
        url: `${CATEGORIES_URL}/${categoryId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: `${CATEGORIES_URL}`,
        method: 'POST',
        body: categoryData,
      }),
      invalidatesTags: ['Category'],
    }),
    updateCategory: builder.mutation({
      query: ({ categoryId, ...updateData }) => ({
        url: `${CATEGORIES_URL}/${categoryId}`,
        method: 'PUT',
        body: updateData,
      }),
      invalidatesTags: ['Categories'],
    }),
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `${CATEGORIES_URL}/${categoryId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
    
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryDetailsQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApiSlice;
