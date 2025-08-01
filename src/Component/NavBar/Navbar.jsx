import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navBg f-family">
            <div className="container">
                <Link className="navbar-brand text-white py-3" to='/'>START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        {/* <li className="nav-item ">
                            <NavLink className="nav-link text-white" aria-current="page" to={'Home'}>Home</NavLink>
                        </li> */}
                    
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"About"}>ABOUT</NavLink>
                        </li> <li className="nav-item">
                            <NavLink className="nav-link text-white" to={'Portfolio'}>PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={'Contact'}>CONTACT</NavLink>
                        </li>
                         


                    </ul>

                </div>
            </div>
        </nav>


    )
}
