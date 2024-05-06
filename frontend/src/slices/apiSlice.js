import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
<<<<<<< HEAD
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
=======

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User', 'Category', 'Brand'],
    endpoints: (builder) => ({}),
});
>>>>>>> b803ed024893d9ac2b7be1375f9953a59d94e083
