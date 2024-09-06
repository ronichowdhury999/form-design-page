import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Ui/Login/Login.jsx'
import Home from './Ui/Home/Home.jsx'
import MyRoute from './Ui/MyRoute/MyRoute.jsx'
import LoginTwo from './Ui/Login/LoginTwo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyRoute />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/loginTwo',
        element: <LoginTwo />

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
