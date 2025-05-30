"use client";
import Image from "next/image";
import StarRatings from 'react-star-ratings';
import React from "react";


import { Product } from "../../types/types";
import Link from "next/link";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const discountPercent = product.oldPrice > product.price
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;

    return (
        <div className="border rounded-[12px] border-[#D1D1D1] p-4" >
            <div className="w-full h-[180px] bg-gray-100 rounded-[12px] mb-4 relative" >

                {product.images[0] ? (
                    <Link href={`/store/product/${product.id}`}>
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover rounded-[12px]"
                        />
                    </Link>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            {discountPercent > 0 && (
                <div className="text-sm text-[#6A983C] mb-2">{discountPercent}% OFF</div>
            )}

            <Link className="font-semibold" href={`/store/product/${product.id}`}>{product.name}</Link>
            <p className="text-sm text-gray-500 mb-2">{product.description}</p>

            <div className="mt-1 mb-2">
                <StarRatings
                    rating={product.rate}
                    starRatedColor="#000"
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="5px"
                />
            </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col ">
                    <span className="font-semibold text-black">${product.price.toFixed(2)}</span>
                    {discountPercent > 0 && (
                        <span className="text-[#A9A9A9] text-sm line-through">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
                <button className="cursor-pointer bg-[#6A983C] text-white font-semibold rounded-[12px] p-[12px]">
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
