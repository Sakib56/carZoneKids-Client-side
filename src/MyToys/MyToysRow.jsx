import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const MyToysRow = ({ toy, index, handleToyDelete }) => {
    const { _id, seller_name, toy_name, category_name, price, available_quantity, picture, seller_email, rating, details_description } = toy

    const [isOpen, setIsOpen] = useState(false);



    return (
        <tr>
            <td className='text-xl'>{index}.</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-40 h-40">
                            <img src={picture} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{toy_name}</div>
                        <div className="text-lg opacity-60">{category_name}</div>
                    </div>
                </div>
            </td>
            <td className='text-lg font-semibold'>
                <p className='text-lg'><span className='mr-2'>Price: </span>{price}</p>
                <p><span className='mr-2'>Rating:</span> {rating}</p>
                <p><span className='mr-2'>Available Quantity:</span> {available_quantity}</p>

            </td>
            <td className='text-lg font-semibold'>
                <p>{seller_name}</p>
                <p>{seller_email}</p>
            </td>
            <td className='text-center'>

                <Link to={`/toyUpdate/${_id}`}><button className='text-2xl text-indigo-500'><FaEdit /></button></Link>

            </td>
            <td className="text-2xl text-center text-red-500">
                <button onClick={() => handleToyDelete(_id)} className=''>
                    <FaTrashAlt />
                </button>
            </td>


        </tr >

    );
};

export default MyToysRow;