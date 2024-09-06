import {NavLink, } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="flex gap-10 py-4 justify-center">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/login'}>Login-1</NavLink>
                <NavLink to={'loginTwo'}>Login-2</NavLink>
            </div>
        </div>
    )
}

export default Header