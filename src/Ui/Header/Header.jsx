import {NavLink, } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="flex gap-10 py-4  justify-center border font-semibold border-b-2">
                <NavLink className={({isActive,isPending})=>
                isPending ? 'pending' : isActive ? 'border-b-2 text-blue-500' : ''} to={'/'}>Login</NavLink>
                <NavLink className={({isActive,isPending})=>
                isPending ? 'pending' : isActive ? 'border-b-2 text-blue-500' : ''}  to={'loginTwo'}>Login-2</NavLink>
                <NavLink className={({isActive,isPending})=>
                isPending ? 'pending' : isActive ? 'border-b-2 text-blue-500' : ''}  to={'/home'}>H-About</NavLink>
            </div>
        </div>
    )
}

export default Header