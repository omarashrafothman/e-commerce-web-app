import React from 'react'
import Image from 'next/image'
import StarRatings from 'react-star-ratings';
import { OrderSummaryItemProps } from "../../types/types"
function OrderSummaryItem({ title, rate, price, oldPrice, img }: OrderSummaryItemProps) {
    return (
        <div
            className="flex items-start gap-4 py-4 border-b border-gray-200"
        >
            <div className="w-[60px] h-[70px]  rounded-md" >
                <Image src={img} alt={title} className='w-full object-cover h-full rounded-lg' width={500} height={500} />

            </div>
            <div className="flex-1 space-y-1 text-sm">
                <h3 className="font-semibold text-sm">{title}</h3>
                <p className="text-gray-500 text-xs">
                    Farm: <span className="text-black ml-1">Tharamis Farm</span>
                </p>
                <p className="text-gray-500 text-xs">
                    Freshness: <span className="text-black ml-1">1 day old</span>
                </p>
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 text-sm">

                    <StarRatings
                        rating={rate}
                        starRatedColor="#FDBC15"
                        numberOfStars={5}
                        name="rating"
                        starDimension="15px"
                        starSpacing="3px"
                    />

                </div>
                {/* Price */}
                <div className="flex items-center gap-2">
                    <p className="text-[#6A983C] font-semibold">{price} USD</p>
                    <del className="text-xs text-gray-400">{oldPrice} USD</del>
                </div>
            </div>

            {/* Qty */}
            <select className="text-sm border rounded-md px-2 py-1">
                <option>1 pcs</option>
                <option>2 pcs</option>
            </select>
        </div>
    )
}

export default OrderSummaryItem