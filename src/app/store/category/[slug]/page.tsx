'use client'
import React, { useState } from "react";

const categories = [
    "Bakery",
    "Fruit and vegetables",
    "Meat and fish",
    "Drinks",
    "Kitchen",
];

// const bestSelling = [
//     "Kitchen",
//     "Meat and fish",
//     "Special nutrition",
//     "Pharmacy",
//     "Baby",
// ];

// const bestFromFarmers = [
//     "Carrots",
//     "Tomatoes",
//     "Potatoes",
//     "Chicken",
//     "Pork",
// ];

const products = Array.from({ length: 6 }, (_, i) => ({
    title: `Product title ${i + 1}`,
    description: "Space for a small product description",
    price: "36.99 USD",
    discount: i % 2 === 0 ? "~ 36 %" : null,
    stock: "320 pcs",
    delivery: "Europe",
    farm: "Grocery Tarm Fields",
    freshness: "New (Extra Fresh)",
}));

const Page = () => {
    const [gridView, setGridView] = useState(true);

    return (
        <div className="p-4 space-y-6">
            {/* Filter and View Toggle */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 rounded border border-[#6A983C] text-[#6A983C]">Filter text</button>
                    <button className="px-3 py-1 rounded border border-[#6A983C] text-[#6A983C]">Filter icon</button>
                    <span className="text-sm text-gray-400">Selected filter</span>
                </div>
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => setGridView(true)}
                        className={`px-3 py-1 rounded border ${gridView ? 'bg-[#6A983C] text-white' : 'border-[#6A983C] text-[#6A983C]'}`}
                    >
                        Grid
                    </button>
                    <button
                        onClick={() => setGridView(false)}
                        className={`px-3 py-1 rounded border ${!gridView ? 'bg-[#6A983C] text-white' : 'border-[#6A983C] text-[#6A983C]'}`}
                    >
                        List
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-1/4 space-y-6">
                    <div>
                        <h2 className="font-semibold mb-2">Categories</h2>
                        <ul className="space-y-1 text-[#6A983C]">
                            {categories.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-2">Brands</h2>
                        <div className="space-y-1">
                            <label className="block"><input type="checkbox" /> Brand 1</label>
                            <label className="block"><input type="checkbox" /> Brand 2</label>
                            <label className="block"><input type="checkbox" /> Brand 3</label>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold mb-2">Rating</h2>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="text-[#6A983C]">
                                {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="font-semibold mb-2">Price</h2>
                        <div className="flex items-center gap-2">
                            <input type="number" placeholder="Min" className="w-1/2 border rounded px-2 py-1" />
                            <input type="number" placeholder="Max" className="w-1/2 border rounded px-2 py-1" />
                        </div>
                        <button className="mt-2 px-4 py-1 bg-[#6A983C] text-white rounded">Apply</button>
                    </div>
                </aside>

                {/* Product List */}
                <main className="flex-1">
                    <div className={`grid ${gridView ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                        {products.map((product, i) => (
                            <div key={i} className="border rounded-lg p-4 flex flex-col gap-2">
                                {product.discount && <div className="text-sm text-[#6A983C]">{product.discount}</div>}
                                <h3 className="font-semibold">{product.title}</h3>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <div className="text-black font-bold">{product.price}</div>
                                <p className="text-sm text-gray-500">Free shipping. Delivery in 1 day</p>
                                <div className="text-sm">
                                    <div><strong>Freshness:</strong> {product.freshness}</div>
                                    <div><strong>Farm:</strong> {product.farm}</div>
                                    <div><strong>Delivery:</strong> {product.delivery}</div>
                                    <div><strong>Stock:</strong> {product.stock}</div>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <button className="flex-1 px-4 py-1 bg-[#6A983C] text-white rounded">Product Detail</button>
                                    <button className="flex-1 px-4 py-1 border border-[#6A983C] text-[#6A983C] rounded">Add to wishlist</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2 bg-[#6A983C] text-white rounded">Show more products</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Page;