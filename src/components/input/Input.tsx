import React from 'react'
import { InputProps } from "../../types/types"

function Input({ name, placeholder, type, label, id, classes }: InputProps) {
    return (
        <div className='flex flex-col'>
            {label && (<label className=' text-[12px] font-semibold text-[#151515] mb-1' htmlFor={id}>{label}</label>)}
            <input className={`bg-[#F9F9F9] border-[#D1D1D1] border focus:outline-[#6A983C] focus:border-[#6A983C]  placeholder:text-[#A9A9A9] rounded-[12px] py-3 px-4 ${classes}`} placeholder={placeholder} type={type} id={id} name={name} />
        </div>
    )
}

export default Input