import { BRANDS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const brandsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => ({
        url: BRANDS_URL,
      }),
      providesTags: ['Brands'],
      keepUnusedDataFor: 5,
    }),
    getBrandDetails: builder.query({
      query: (brandId) => ({
        url: `${BRANDS_URL}/${brandId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createBrand: builder.mutation({
      query: (brandData) => ({
        url: `${BRANDS_URL}`,
        method: 'POST',
        body: brandData,
      }),
      invalidatesTags: ['Brand'],
    }),
    updateBrand: builder.mutation({
      query: ({ brandId, ...updateData }) => ({
        url: `${BRANDS_URL}/${brandId}`,
        method: 'PUT',
        body: updateData,
      }),
      invalidatesTags: ['Brands'],
    }),
    deleteBrand: builder.mutation({
      query: (brandId) => ({
        url: `${BRANDS_URL}/${brandId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Brand'],
    }),
    
  }),
});

export const {
  useGetBrandsQuery,
  useGetBrandDetailsQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = brandsApiSlice;
