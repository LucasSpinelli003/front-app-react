import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Erro from './routes/Erro.jsx'
import Sobre from './routes/sobre.jsx'
import Login from './routes/login.jsx'

const routes = createBrowserRouter([
  {path: '/', element: <App/>, errorElement: <Erro />,
  children: [
    {path: '/', element: <Home/>},
    {path: '/produtos', element: <Produtos/>},
    {path: '/login', element: <Login/>},
    {path: '/sobre', element: <Sobre/>}
  ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
