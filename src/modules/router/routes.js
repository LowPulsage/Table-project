import { MainPage } from 'pages'

export const authorized = [
  {
    path: '/',
    component: MainPage,
  },
]

export const authorizedPathNames = authorized.map(route => route.path)
