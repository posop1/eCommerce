import { AboutPage, CartPage, FaqPage, HomePage, NotFoundPage, ProductsPage } from '../pages'
import { FullProductPage } from '../pages/FullProductPage/FullProductPage'
import { IFaqText, ILinks, IRoutes } from '../types'

export const routes: IRoutes[] = [
  { path: '', element: HomePage },
  { path: 'products', element: ProductsPage },
  { path: 'products/:id', element: FullProductPage },
  { path: 'faq', element: FaqPage },
  { path: 'about', element: AboutPage },
  { path: 'cart', element: CartPage },
  { path: '*', element: NotFoundPage }
]

export const links: ILinks[] = [
  { to: '/', name: 'Home' },
  { to: '/products', name: 'Products' },
  { to: '/faq', name: 'FAQ' },
  { to: '/about', name: 'About' }
]

export const aboutText: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`

export const faqText: IFaqText[] = [
  {
    id: 1,
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  },
  {
    id: 2,
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  },
  {
    id: 3,
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  },
  {
    id: 4,
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  }
]
