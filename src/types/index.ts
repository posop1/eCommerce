export interface ILinks {
  to: string
  name: string
}
export interface IRoutes {
  path: string
  element: React.FC
}

export interface IFaqText {
  name: string
  text: string
}
export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}
