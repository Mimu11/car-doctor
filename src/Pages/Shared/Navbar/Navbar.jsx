import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
const Navbar = props => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {user?.email ? <> <li><NavLink to='/bookings'>My Bookings</NavLink></li>
            <button onClick={handleLogOut} className='btn btn-primary'>Log out</button></>
            : <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
    </>


    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {/* <div>
                {
                    user ? <>
                        <div className='gap-4 flex'>
                            <NavLink to='/bookings'>My Bookings</NavLink>
                            <button onClick={handleLogOut} className='btn btn-primary'>Log out</button>
                        </div>

                    </>
                        : <Link to='/login'><button className='btn btn-primary'>Login</button></Link>
                }
            </div> */}
            <div className="navbar-end">
                <button className='btn btn-secondary btn-outline'>Appointment</button>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;