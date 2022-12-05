import { AboutPage, FaqPage, HomePage, NotFoundPage, ShopPage } from '../pages'
import { ILinks, IRoutes } from '../types'

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
