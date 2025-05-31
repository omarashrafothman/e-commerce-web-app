'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Carrot, Organic (1kg)',
            price: 4.99,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1656269265590-721ed3544b8e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            name: 'Tomato, Fresh (500g)',
            price: 2.5,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1711602926021-db8bce24843a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleQuantityChange = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                    : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className=" w-[90%] mx-auto  p-2">
            <h1 className="text-2xl font-semibold my-6">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="flex justify-between flex-wrap">
                    <div className="w-full md:w-[69%]">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 border-b border-[#D1D1D1]  pb-3 w-full mb-2"
                            >
                                <div className='w-[100px] h-[100px]'>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={50}
                                        height={50}
                                        className="rounded-[12px] object-cover w-full h-full"
                                    /></div>
                                <div className="flex-1">
                                    <h2 className="text-md font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-500">
                                        ${item.price.toFixed(2)} / item
                                    </p>
                                    <div className="flex items-center mt-2 gap-2">
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                                            onClick={() => handleQuantityChange(item.id, -1)}
                                        >
                                            -
                                        </button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                                            onClick={() => handleQuantityChange(item.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-sm">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <button
                                        className="text-xs text-white font-bold rounded-[12px] py-2 px-4 cursor-pointer  bg-red-500 mt-2"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-6 rounded-md shadow-sm w-full  md:w-[29%]">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Subtotal</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                            <span>Delivery</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between text-md font-semibold border-t pt-2">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className='flex flex-col gap-2'>

                            <Link href="/store/checkout" className="w-full mt-6 bg-[#6A983C] font-semibold  text-white py-2 text-center rounded-[12px] hover:bg-[#46760A] border border-[#46760A]  transition">
                                Checkout
                            </Link>
                            <Link
                                href="/store"
                                className="text-center font-semibold  block mt-4 text-sm text-gray-500 hover:text-gray-800"
                            >
                                Continue Shopping
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
