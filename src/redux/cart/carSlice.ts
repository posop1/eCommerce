import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types'

const initialState: IProduct[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<IProduct>) => {
      state.push(actions.payload)
    },

    removeItem: (state, actions: PayloadAction<{ id: number }>) => {
      return state.filter((item) => item.id !== actions.payload.id)
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
