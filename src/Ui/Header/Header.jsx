import {NavLink, } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="flex gap-10 py-4 justify-center">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'loginTwo'}>LoginTwo</NavLink>
            </div>
        </div>
    )
}

export default Header