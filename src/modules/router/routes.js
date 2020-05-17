import { FolderSelection, MainPage } from 'pages'

export const authorized = [
  {
    path: '/',
    component: FolderSelection,
  },
  {
    path: '/:type',
    component: MainPage,
  },
]

export const authorizedPathNames = authorized.map(route => route.path)
