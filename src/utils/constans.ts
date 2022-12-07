import { AboutPage, FaqPage, HomePage, NotFoundPage, ShopPage } from '../pages'
import { IFaqText, ILinks, IRoutes } from '../types'

export const routes: IRoutes[] = [
  { path: '', element: HomePage },
  { path: 'shop', element: ShopPage },
  { path: 'faq', element: FaqPage },
  { path: 'about', element: AboutPage },
  { path: '*', element: NotFoundPage }
]

export const links: ILinks[] = [
  { to: '/', name: 'Home' },
  { to: '/shop', name: 'Shop' },
  { to: '/faq', name: 'FAQ' },
  { to: '/about', name: 'About' }
]

export const aboutText: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`

export const faqText: IFaqText[] = [
  {
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  },
  {
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  },
  {
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  },
  {
    name: 'asdasd',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus perspiciatis
            illum, debitis neque dolorum eligendi voluptate, repellat accusamus odio voluptas culpa
            eos aliquid quisquam dolore laboriosam optio. Aliquam, ratione!`
  }
]
