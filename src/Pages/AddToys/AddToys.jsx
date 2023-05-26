import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const AddToys = () => {
    useTitle('Add New Toys')
    const { user } = useContext(AuthContext)
    const handleAddToys = event => {
        event.preventDefault()
        const form = event.target;
        const picture = form.toys_url.value;
        const toy_name = form.toysName.value
        const seller_name = form.sellerName.value;
        const seller_email = form.sellerEmail.value;
        const category_name = form.sub_category.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const available_quantity = form.quantity.value;
        const details_description = form.details.value;

        const newToys = { picture, toy_name, seller_name, seller_email, category_name, price, rating, available_quantity, details_description }
        console.log(newToys)

        fetch('https://car-zone-kids-server-site.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'success!',
                    text: 'Data Inserted Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                form.reset()
            })
    }

    return (
        <div className='max-w-6xl mx-auto my-20'>
            <h1 className='mx-auto text-center py-3 font-semibold text-white text-3xl rounded-lg bg-secondary w-1/2'>Add New Toys</h1>
            <Link to="/allToys">
                <p className='font-semibold flex gap-3 items-center my-5 text-xl'>
                    <span><FaArrowLeft /></span>
                    All Toys
                </p>
            </Link>

            <div className='shadow-xl bg-slate-200 pt-5 px-10'>
                <p className='text-center text-sm font-serif'>Use the below form to create a new Toys</p>
                <form onSubmit={handleAddToys} className='p-5 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Toys Picture</span>
                            </label>
                            <label >
                                <input type="url" placeholder="Enter you toys picture Url" name='toys_url' required className="input input-bordered w-full py-3 px-2" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Toy Name</span>
                            </label>
                            <label >
                                <input type="text" placeholder="Enter toy name" name='toysName' className="input input-bordered w-full  py-3 px-2" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Seller Name</span>
                            </label>
                            <label >
                                <input type="text" placeholder="seller name" name='sellerName' defaultValue={user?.displayName} className="input input-bordered w-full  py-3 px-2" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Seller Email</span>
                            </label>
                            <label >
                                <input readOnly type="text" placeholder="seller email" name='sellerEmail' defaultValue={user?.email} className="input input-bordered w-full py-3 px-2" required />
                            </label>
                        </div>
                        <div className="from-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Sub Category</span>
                            </label>
                            <select name='sub_category' required className="select select-bordered text-lg w-full">
                                <option>sports car</option>
                                <option>trucks car</option>
                                <option>police car</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Price</span>
                            </label>
                            <label >
                                <input type="number" placeholder="Enter toys price" name='price' className="input input-bordered w-full  py-3 px-2" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Rating</span>
                            </label>
                            <label >
                                <input type="text" placeholder="Rating" name='rating' className="input input-bordered w-full  py-3 px-2" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Available Quantity</span>
                            </label>
                            <label >
                                <input type="text" placeholder="Enter toys quantity" name='quantity' className="input input-bordered w-full  py-3 px-2" required />
                            </label>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Detail Description </span>
                        </label>
                        <label >
                            <textarea name="details" className='w-full rounded-lg p-3' placeholder='Your Toys Details Description' cols="10" rows="3"></textarea>
                        </label>
                    </div>

                    <div className='text-center mt-10'>
                        <button className='bg-secondary rounded-lg px-5 py-3 -lg text-white font-bold text-lg cursor-pointer'><input className='cursor-pointer' type="submit" value="Add Toy" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;