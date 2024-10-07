import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Root from "../Root/Root"
import About from "../Pages/About/About"
import Registration from "../Pages/Login/Registration"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path:'/registration',
                element:<Registration/>
            },
            {
                path:'/about',
                element:<About/>
            }
        ]
    }
])
