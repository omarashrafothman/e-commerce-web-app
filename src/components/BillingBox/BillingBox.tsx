import React from 'react'
import Image from 'next/image'
import { BillingBoxProps } from "../../types/types"

function BillingBox({ inputBox, imgSrc, price, title }: BillingBoxProps) {
    return (
        <div className='bg-[#F9F9F9] border border-[#D1D1D1] py-3 px-4 rounded-[12px] flex items-center justify-between'>
            <div>
                {inputBox}
            </div>
            <div className='flex items-center gap-1'>
                <p className='text-[#6A983C] font-semibold'>{`${price} USD`}</p>
                <div className='bg-[#F5F5F5] rounded-[12px] mx-2 hidden md:block'><p>{title}</p></div>
            </div>
            <div className='w-[80px] h-[50px] flex justify-center items-center'>
                <Image src={imgSrc} width={100} height={100} className='w-full  object-cover' alt='method logo' />

            </div>



        </div>
    )
}

export default BillingBox