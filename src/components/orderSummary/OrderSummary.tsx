'use client'
import React, { useState } from 'react'
import OrderSummaryItem from '../orderSummaryItem/OrderSummaryItem'
// import Image from 'next/image'

const OrderSummary = () => {
    const [promo, setPromo] = useState('')

    return (
        <div className='w-full bg-gray-100 rounded-xl p-2'>

            <div className="bg-white rounded-[12px] p-6 shadow-md max-w-md w-full">
                <h2 className="text-xl font-semibold mb-1">Order Summary</h2>
                <p className="text-xs text-gray-500 mb-5">
                    Price can change depending on shipping method and taxes of your state.
                </p>

                {/* Products */}
                <OrderSummaryItem title={"Face Cream"} rate={4} price={90} oldPrice={120} img={"https://images.unsplash.com/photo-1601049315503-07926a49f521?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <OrderSummaryItem title={"Green Tea"} rate={3} price={50} oldPrice={850} img={"https://images.unsplash.com/photo-1711602926021-db8bce24843a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />



                {/* Totals */}
                <div className="text-sm mt-4 space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Subtotal</span>
                        <span>73.98 USD</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Tax</span>
                        <span>17% 16.53 USD</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Shipping</span>
                        <span>0 USD</span>
                    </div>
                </div>

                {/* Promo code */}
                <div className="mt-4">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                        <input
                            type="text"
                            value={promo}
                            onChange={(e) => setPromo(e.target.value)}
                            placeholder="Apply promo code"
                            className="flex-1 px-4 py-2 outline-none text-sm"
                        />
                        <button className="bg-[#6A983C] text-white text-sm px-4 py-2">
                            Apply now
                        </button>
                    </div>
                </div>

                {/* Total Order */}
                <div className="mt-4">
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total Order</span>
                        <span className="text-[#6A983C]">89.84 USD</span>
                    </div>
                    <p className="text-xs text-[#6A983C] mt-1">
                        Guaranteed delivery day: <span className="font-semibold">June 12, 2020</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default OrderSummary
