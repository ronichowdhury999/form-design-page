
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const MyRoute = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default MyRoute