import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/login.jpg';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';


const Resister = () => {
    useTitle('SignUp')
    const { createUser, updatedUserInfo, logOutUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSingUp = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(url, password, email, name)

        if (password.length < 6) {
            setError('password at least 6 characters')
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updatedUserInfo(loggedUser, name, url)
                    .then(() => { })
                    .catch(error => console.log(error))
                logOutUser()
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => console.log(error))
                form.reset()
                navigate('/', { replace: true })
                Swal.fire({
                    title: 'Registration successfully !',
                    text: 'Please login',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 max-w-7xl mx-auto'>
            <div className='flex items-center'>
                <img className='w-full h-[450px] mx-auto' src={img} alt="" />
            </div>
            <div className='border rounded-xl w-3/4 p-5'>
                <h1 className='text-4xl mt-5 font-bold text-center text-primary'>Sign Up</h1>
                <form onSubmit={handleSingUp} className='p-5'>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3'>Name</p>
                        </label>
                        <input className="input input-bordered w-full" type="text" placeholder='Enter your name' name="name" />
                    </div>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3 mt-5'>Email</p>
                        </label>
                        <input className="input input-bordered w-full" type="email" placeholder='Enter your email' name="email" required />
                    </div>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3 mt-5'>Password</p>
                        </label>
                        <input className="input input-bordered w-full" type={showPassword ? 'text' : 'password'} placeholder='Enter your password' name="password" required />
                    </div>
                    <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer my-1 text-sky-600'>
                        {
                            showPassword ? 'Hide password' : 'show password'
                        }
                    </div>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3 mt-5'>Photo Url</p>
                        </label>
                        <input className="input input-bordered w-full" type='url' placeholder='Enter your photo url' name="url" />
                    </div>

                    <div>
                        <p className='text-red-500 font-semibold'>{error}</p>
                    </div>
                    <input type="submit" className='w-full bg-primary rounded-lg mt-5 py-2 text-xl text-white font-bold cursor-pointer' value="Sign Up" />
                    <h1 className='text-center mt-5 text-lg'>Already Have an account? <Link to='/login'><span className='link text-red-500'>Sign In</span></Link></h1>
                </form>
                {/* <SocialLogin></SocialLogin> */}
            </div>
        </div>
    );
};

export default Resister;
