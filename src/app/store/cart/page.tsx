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
            image: '/carrot.jpg',
        },
        {
            id: 2,
            name: 'Tomato, Fresh (500g)',
            price: 2.5,
            quantity: 1,
            image: '/tomato.jpg',
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
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 border-b pb-4"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="rounded"
                                />
                                <div className="flex-1">
                                    <h2 className="text-md font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-500">
                                        ${item.price.toFixed(2)} / item
                                    </p>
                                    <div className="flex items-center mt-2 gap-2">
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded"
                                            onClick={() => handleQuantityChange(item.id, -1)}
                                        >
                                            -
                                        </button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            className="px-2 py-1 bg-gray-200 rounded"
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
                                        className="text-xs text-red-500 mt-2"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-6 rounded-md shadow-sm">
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
                        <button className="w-full mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                            Checkout
                        </button>
                        <Link
                            href="/"
                            className="text-center block mt-4 text-sm text-gray-500 hover:text-gray-800"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
