import React, { useContext, useState } from 'react';
import img from '../../assets/login.jpg';
import googleLoginImg from '../../assets/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { logInUser, googleLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    // console.log(logInUser)
    const handleSignIn = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)
        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                // navigate(from, { replace: true });
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
                <div className='flex items-center'>
                    <img className='w-full h-[450px] mx-auto' src={img} alt="" />
                </div>
                <div className='border rounded-xl w-3/4 p-5'>
                    <h1 className='text-4xl mt-5 font-bold text-center text-primary'>Login</h1>
                    <form onSubmit={handleSignIn} className='p-10'>
                        <label>
                            <p className='text-lg font-semibold mb-3'>Email</p>
                        </label>
                        <input className="input input-bordered w-full" type="email" placeholder='Enter your email' name="email" required />
                        <label>
                            <p className='text-lg font-semibold mb-3 mt-5'>Password</p>
                        </label>
                        <input className="input input-bordered w-full" type="password" placeholder='Enter your password' name="password" required />
                        <Link><h1 className='mt-2'>Forget Password ? </h1></Link>
                        <div>
                            <p className='text-red-500 font-semibold'>{error}</p>
                        </div>
                        <input type="submit" className='w-full bg-primary rounded-lg mt-5 py-2 text-xl text-white font-bold cursor-pointer' value="Sign In" />
                        <h1 className='text-center text-lg mt-5'>New User Please ? <Link to='/resister'><span className='link text-primary'>Sign Up</span></Link></h1>
                    </form>
                    <div onClick={handleGoogleLogin} className='px-8 cursor-pointer'>
                        <button className='flex items-center justify-center gap-4 btn btn-outline border text-primary border-pink-600 w-full hover:bg-primary hover:border-0'>Login With Google <img className='w-12 h-12 p-2' src={googleLoginImg} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;