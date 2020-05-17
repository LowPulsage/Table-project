import { FolderSelection, FilesSelection, MainPage } from 'pages'

export const authorized = [
  {
    path: '/',
    component: FolderSelection,
  },
  {
    path: '/:type',
    component: FilesSelection,
  },
  {
    // ?word=:word&excel=:excel
    path: '/:type/view',
    component: MainPage,
  },
]

export const authorizedPathNames = authorized.map(route => route.path)
