'use client';

import { useState } from 'react';
import { FaHeart, FaBalanceScale } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import ProductTabs from "../../../../components/productDetailsTabs/ProductTabs";
import Products from "../../../../locals/data/products.json";
import { useParams } from 'next/navigation';
import Image from 'next/image';
export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [unit, setUnit] = useState('Pcs');

    const params = useParams();
    const id = params.slug;
    console.log(id)


    const product = Products.find(p => p.id === id);

    if (!product) return <p>Product not found</p>;
    console.log(product)

    return (
        <div className="p-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mt-5">
            {/* Left image placeholder */}
            <div className=" aspect-square rounded-lg flex items-start justify-start relative">
                <Image src={product.images[0]} className='object-cover' alt={product.name} fill />
                <div className="absolute top-3 left-3 space-y-2">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">~ 36 %</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">Free shipping</span>
                </div>
            </div>

            {/* Right product details */}
            <div>
                <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                    {Array(4).fill(0).map((_, i) => (
                        <AiFillStar key={i} />
                    ))}
                    <span className="text-sm text-gray-500">(1 customer review)</span>
                </div>

                <p className="text-gray-600 mb-4">
                    {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                    <p><strong>SKU:</strong> {product.id}</p>
                    <p><strong>Freshness:</strong> 1 days old</p>
                    <p><strong>Category:</strong> <span className="text-green-600 cursor-pointer hover:underline">{product.category}</span></p>
                    <p><strong>Buy by:</strong> {product.unit}</p>
                    <p><strong>Stock:</strong>{product.inStock ? <span className="text-green-600">In Stock</span> : <span className="text-red-600">Out of Stock</span>} </p>
                    <p><strong>Delivery:</strong> in 2 days</p>

                </div>

                <div className="bg-gray-50 border p-4 rounded mb-4 flex items-center justify-between gap-4 flex-wrap">
                    <div>
                        <p className="text-2xl font-semibold text-green-600">{product.price} USD</p>
                        <p className="text-sm text-gray-400 line-through">{product.oldPrice} USD</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(+e.target.value)}
                            className="border p-1 w-16 rounded text-center" />
                        <select value={unit} onChange={(e) => setUnit(e.target.value)}
                            className="border p-1 rounded">
                            <option value="Pcs">Pcs</option>
                            <option value="Kg">Kg</option>
                            <option value="Box">Box</option>
                            <option value="Pack">Pack</option>
                        </select>
                        <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700">
                            <BsCartPlus /> Add to cart
                        </button>
                    </div>
                </div>

                <div className="flex gap-6 mb-6 text-sm">
                    <button className="flex items-center gap-2 text-red-500 hover:underline">
                        <FaHeart /> Add to my wish list
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:underline">
                        <FaBalanceScale /> Compare
                    </button>
                </div>

                <div>
                    <ProductTabs />
                </div>
            </div>
        </div>
    );
}
