import React from 'react';
import error from '../../assets/error_page.jpg'
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error page')
    return (
        <div className='relative'>
            <img className='w-full h-screen' src={error} alt="" />
            <Link to='/'><button className='btn btn-error absolute top-24 right-1/2 text-lg text-white'>Back to home</button></Link>
        </div>
    );
};

export default ErrorPage;