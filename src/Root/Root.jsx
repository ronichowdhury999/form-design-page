import Header from '../Ui/Header/Header';
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div >
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  )
}

export default Root