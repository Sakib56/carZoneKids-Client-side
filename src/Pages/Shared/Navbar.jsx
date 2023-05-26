import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.jpg'
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const [nameVisible, setNameVisible] = useState(false);
    const handleLogout = () => {
        logOutUser()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <nav className="navbar bg-secondary text-white p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-primary lg:hidden mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/allToys'>All Toys</ActiveLink>
                        {user && <>
                            <ActiveLink to='/myToys'>My Toys</ActiveLink>
                            <ActiveLink to='/addToys'>Add A Toy</ActiveLink>
                        </>
                        }
                        <ActiveLink to='/blog'>Blogs</ActiveLink>
                    </ul>
                </div>

                <div className='flex items-center gap-1'>
                    <img className='w-16 h-16 rounded-full' src={logo} alt="" />
                    <h1 className="text-lg md:text-4xl md:font-bold">Car Zone <span className='text-primary'>Kids</span></h1>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-bold gap-x-10">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/allToys'>All Toys</ActiveLink>
                    {user && <>
                        <ActiveLink to='/myToys'>My Toys</ActiveLink>
                        <ActiveLink to='/addToys'>Add A Toy</ActiveLink>
                    </>
                    }
                    <ActiveLink to='/blog'>Blogs</ActiveLink>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex items-center gap-5 relative'>
                        <div className=''>
                            {
                                user.photoURL && <img className='w-12 h-12 rounded-full' src={user.photoURL} onMouseEnter={() => setNameVisible(true)} onMouseLeave={() => setNameVisible(false)} alt="" />
                            }
                            <p className='absolute t-0 text-lg font-semibold'>{nameVisible && <span className="user-name">{user?.displayName}</span>}</p>
                        </div>
                        <button onClick={handleLogout} className='btn text-white bg-primary'>Sign Out</button>
                    </div> :
                        <div className='text-secondary'>
                            <ActiveLink to='/login'><div className='border bg-gray-200 font-semibold hover:bg-gray-300 text-lg rounded border-black px-5 py-2'>
                                Login
                            </div></ActiveLink>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;