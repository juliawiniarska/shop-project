import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
import store from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  });

export const apiSlice = createApi({
  reducerPath: 'api',  
  baseQuery,
  tagTypes: ['Product', 'Order', 'User', 'Category', 'Brand'],
  endpoints: (builder) => ({
  }),
});

export const { useExampleQuery, useExampleMutation } = apiSlice;
