import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductCreatePage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate();

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' },
            };
            const { data } = await axios.post('/api/upload', formData, config);
            setImage(data);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            await axios.post('/api/products', { name, price, image, category, description }, config);
            navigate('/marketplace');
        } catch (error) {
            console.error('Failed to create product', error);
        }
    };

    return (
        <div className="container mx-auto flex justify-center py-12">
            <div className="w-full max-w-lg">
                <form onSubmit={submitHandler} className="bg-white shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-3xl font-bold mb-6 text-center text-stone-gray">List a New Item</h1>
                    {/* Form fields */}
                    <div className="mb-4">
                        <label className="block text-stone-gray text-sm font-bold mb-2">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-stone-gray text-sm font-bold mb-2">Price</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-stone-gray text-sm font-bold mb-2">Image</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mb-2" required/>
                        <input type="file" onChange={uploadFileHandler} className="w-full"/>
                        {uploading && <div>Uploading...</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-stone-gray text-sm font-bold mb-2">Category</label>
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-stone-gray text-sm font-bold mb-2">Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3" required></textarea>
                    </div>
                    <button type="submit" className="bg-leaf-green hover:bg-forest-green text-white font-bold py-2 px-4 rounded w-full">
                        Create Listing
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductCreatePage;