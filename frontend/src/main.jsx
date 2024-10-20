import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import PageNotFound from './pages/PageNotFound.jsx'
import Artista from './pages/Artista.jsx'
import ConteudoPrincipal from './pages/ConteudoPrincipal.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <ConteudoPrincipal />},
      {path: 'artistas/:id', element: <Artista />},
      {path: '*', element: <PageNotFound />}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
