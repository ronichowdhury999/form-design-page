
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const MyRoute = () => {
  return (
    <div className='bg-[url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600)]' style={{ "backgroundImage": "url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600')", "background-repeat": "no-repeat","backgroundSize":"cover" }}>
        <Header />
        <Outlet />
    </div>
  )
}

export default MyRoute