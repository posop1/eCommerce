import { IProduct } from '../types'

export const calcTotalPrice = (items: IProduct[]) => {
  return items.reduce((sum, item) => item.price + sum, 0)
}
