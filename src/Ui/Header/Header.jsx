import { NavLink, } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="flex gap-10 py-6 justify-center font-semibold ">
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'border-b-2 text-blue-500' : ''} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'border-b-2 text-blue-500' : ''} to={'/login'}>Login</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'border-b-2 text-blue-500' : ''} to={'/about'}>About</NavLink>

                <NavLink className={({isActive,isPending})=>
                isPending ? 'pending' : isActive ? 'border-b-2 text-blue-500' : ''}  to={'/registration'}>Registration</NavLink>

            </div>
        </div>
    )
}

export default Header