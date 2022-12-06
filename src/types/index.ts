export interface ILinks {
  to: string
  name: string
}
export interface IRoutes {
  path: string
  element: React.FC
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}
