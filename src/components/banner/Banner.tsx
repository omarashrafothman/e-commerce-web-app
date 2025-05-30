import React from 'react'
import { BannerProps } from "../../types/types"
import Image from 'next/image'
function Banner({ bannerTitle, bannerDescription, link }: BannerProps) {
    return (
        <div className="bg-[#f4f8ec] rounded-xl p-6 h-[14rem] pt-[2rem]">
            <div className="text-sm text-[#6A983C]">{bannerTitle}</div>
            <h3 className="text-lg font-semibold my-2 text-[#151515]">{bannerDescription}</h3>
            <button className="mt-[4rem] px-4 py-2 border-2 border-[#92C064] text-[#151515] font-semibold rounded-[12px] text-sm flex items-center justify-between cursor-pointer">{link}<Image src="/assets/icons/arrow-right.png" alt='arrow-right' className='w-5 h-5' width={100} height={100} /></button>
        </div>
    )
}

export default Banner