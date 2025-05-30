import React from 'react'
import { AsideProps } from "../../types/types"
import Link from 'next/link'

import Image from 'next/image'
function AsideList({ listTitle, listItems, btn }: AsideProps) {
    return (
        <div className='mb-[6rem]'>
            <h2 className="text-lg font-semibold mb-2">{listTitle}</h2>
            <ul className="space-y-1 text-[#6A983C]">
                {listItems.map((item, index) => (
                    <li key={index} className='text-[#6A983C]'><Link className="" href={`/store/category/${item}`}>{item}</Link></li>
                ))}
            </ul>
            <button className="mt-5 px-5 py-3 bg-[#F5F5F5]   text-black rounded-[12px] flex items-center justify-between font-semibold">{btn}<Image src="/assets/icons/arrow-right.png" alt='arrow-right' className='w-5 h-5' width={100} height={100} /></button>
        </div>
    )
}

export default AsideList