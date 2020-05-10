import { Home, Unauthorized } from 'pages'

export const authorized = [
  {
    path: '/',
    component: Home,
  },
]

export const unauthorized = [
  {
    path: '/',
    component: Unauthorized,
  },
]

export const unauthorizedPathNames = unauthorized.map(route => route.path)
export const authorizedPathNames = authorized.map(route => route.path)
