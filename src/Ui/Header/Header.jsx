import {NavLink, } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="flex gap-10 py-4 justify-center border font-semibold border-b-2">
                <NavLink to={'/'}>Login</NavLink>
                <NavLink to={'loginTwo'}>Login-2</NavLink>
                <NavLink to={'/home'}>H-About</NavLink>
            </div>
        </div>
    )
}

export default Header