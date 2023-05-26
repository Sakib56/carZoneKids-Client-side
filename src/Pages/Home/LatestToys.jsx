import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';


const LatestToys = () => {
    return (
        <div className='mt-10 md:mt-28'>
            <h1 className='text-center text-4xl font-bold text-primary mb-5 md:mb-12'>Our Latest Toys</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='shadow-xl p-5 rounded'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src="https://i.ibb.co/nnwdjJh/bcedea2285ca600818cf56a89c454f46.jpg" alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Lighting car toys</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 2600</p>
                        <button className='border py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
                <div className='shadow-xl p-5 rounded'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src="https://i.ibb.co/7tYpkgG/mayfair-main.jpg" alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Yellow Mayfair car toys</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 3900</p>
                        <button className='border py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
                <div className='shadow-xl p-5 rounded'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src="https://i.ibb.co/Hgvpw3k/3d-fast-steering-remote-car-toys-world-original-imaggrrzw7vtqbpy.webp
                    " alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Sports Remote control car</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 4000</p>
                        <button className='border py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
                <div className='shadow-xl p-5 rounded'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src=" https://i.ibb.co/FYSM2gc/aacfbf4c-0e5f-47c8-8768-07445c8b400e-dfd364f23038d3f594e26b3d2a554e26.webp" alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Racing car toys</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 3200</p>
                        <button className='border py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestToys;