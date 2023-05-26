import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ toy ,index}) => {
    // console.log(toy)
    const { _id,seller_name, toy_name, category_name, price, available_quantity
    } = toy
    return (
        <tr className='hover text-lg font-semibold font-sans'>
            <td>{index}</td>
            <td>{toy_name}</td>
            <td>{seller_name}</td>
            <td>{category_name}</td>
            <td>{price}</td>
            <td className='text-center'>{available_quantity}</td>
            <td><Link to={`/toy/${_id}`}><button className='bg-secondary text-white px-5 py-2 rounded'>View details</button></Link></td>
        </tr>

    );
};

export default TableRow;