import React from 'react';

/**
 * 
 * https://i.ibb.co/kBFFHZJ/gettyimages-1225364095-612x612.jpg
 * 
 * https://i.ibb.co/NnGkGTy/PAW-Article-Image-01.jpg
 * 
 * https://i.ibb.co/nrzF9cj/Magnetic-Car-Loader-009390-1-Kid-Lifestyle.webp
 */

const ToysBlog = () => {
    return (
        <div className='mt-10 md:mt-28'>
            <h1 className='text-center text-4xl font-bold text-primary md-5 md:mb-12'>Our Toys Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='shadow-xl p-5 rounded'>
                    <img className='w-96 h-72 rounded-lg' src="https://i.ibb.co/NnGkGTy/PAW-Article-Image-01.jpg" alt="" />
                    <button className='mt-2 bg-primary text-white  rounded py-1 px-4 text-lg'>05 March, 2023</button>
                    <h1 className='mt-3 text-lg font-semibold'>How Do Children Benefit from Playing with Toy Cars and Trucks?</h1>
                    <p className='mt-3 text-md font-sans'>Playing with toy cars and trucks has long been a popular pastime for millions of children worldwide and is still among the most popular activities for kids today..... <button className='link text-primary'>Read More </button></p>
                    

                </div>
                <div className='shadow-xl p-5 rounded'>
                    <img className='w-96 h-72 rounded-lg' src=" https://i.ibb.co/kBFFHZJ/gettyimages-1225364095-612x612.jpg" alt="" />
                    <button className='mt-2 bg-primary text-white  rounded py-1 px-4 text-lg'>10 April, 2023</button>
                    <h1 className='mt-3 text-lg font-semibold'>Outstanding Benefits of Using Remote-Control Toys for Children?</h1>
                    <p className='mt-3 text-md font-sans'>Using a remote-control toy can be a lot of pleasurable things for kids of all ages. There are different types of remote-control toys, each helps to teach kids different skills..... <button className='link text-primary'>Read More </button></p>
                    

                </div>
                <div className='shadow-xl p-5 rounded'>
                    <img className='w-96 h-72 rounded-lg' src="https://i.ibb.co/nrzF9cj/Magnetic-Car-Loader-009390-1-Kid-Lifestyle.webp" alt="" />
                    <button className='mt-2 bg-primary text-white  rounded py-1 px-4 text-lg'>10 April, 2023</button>
                    <h1 className='mt-3 text-lg font-semibold'>Benefit from Playing indoor activities with with toy cars?</h1>
                    <p className='mt-3 text-md font-sans'>When the weather gets bad outside, it is important to keep your child occupied with engaging indoor activities. The humble toy car offers an excellent starting point for easy..... <button className='link text-primary'>Read More </button></p>
                    

                </div>
            </div>
        </div>
    );
};

export default ToysBlog;