import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types'

export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://638f65344ddca317d7f7732e.mockapi.io/api/' }),
  endpoints: (build) => ({
    fetchProducts: build.query<IProduct[], { page?: number; limit?: number }>({
      query: (arg) => {
        const { page = 1, limit = 9 } = arg
        return {
          url: `/products`,
          params: { page, limit }
        }
      }
    }),
    fetchProductById: build.query<IProduct, { id?: string }>({
      query: (arg) => {
        const { id } = arg
        return {
          url: `/products/${id}`
        }
      }
    })
  })
})

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productApi
