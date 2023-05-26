import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const CategoryDetails = () => {
    const data = useLoaderData()
    // console.log(data)
    useTitle('Toy Details')
    const { toy_name, details_description, picture, price, rating, seller_email, seller_name, available_quantity } = data
    return (
        <div className='my-20 max-w-7xl mx-auto rounded'>
            <div className='grid grid-cols-1 md:grid-cols-2 p-5 items-center shadow-2xl'>
                <div className='p-5'>
                    <h1 className='text-5xl font-bold text-primary'>{toy_name}</h1>
                    <p className='text-md mt-2'>{details_description}</p>
                    <p className='text-xl font-semibold mt-8'>Available Quantity : {available_quantity}</p>
                    <div className='flex gap-5 items-center text-xl font-semibold'>

                        <button className=''><span className='text-2xl'>Price:</span> {price}</button>
                        <button><span className='text-2xl'>Rating:</span> {rating}</button>
                    </div>

                    <p className='text-xl font-bold mt-5'>Seller Info:</p>
                    <p className='text-md font-semibold'>Name: {seller_name}</p>
                    <p className='text-md font-semibold'>Email: {seller_email}</p>

                </div>
                <div className=''>
                    <img className='w-3/4 mx-auto' src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;