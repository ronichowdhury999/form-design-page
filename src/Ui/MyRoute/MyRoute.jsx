
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const MyRoute = () => {
  return (
    <div className='text-white' style={{ "backgroundImage": "url('https://i.ibb.co.com/wN7BN6t/385091278-1509228713174811-3680885003671536059-n.jpg')", "background-repeat": "no-repeat","backgroundSize":"cover" }}>
        <Header />
        <Outlet />
    </div>
  )
}

export default MyRoute