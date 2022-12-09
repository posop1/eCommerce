import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types'

export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://638f65344ddca317d7f7732e.mockapi.io/api/' }),
  endpoints: (build) => ({
    fetchProducts: build.query<IProduct[], number>({
      query: (limit) => `/products?page=1&limit=${limit}`
    })
  })
})

export const { useFetchProductsQuery } = productApi
