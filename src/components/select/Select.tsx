// components/Select.tsx
import React from 'react'
import { SelectProps } from "../../types/types"

function Select({ name, id, label, options, placeholder, classes }: SelectProps) {
    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={id} className="text-[12px] font-semibold text-[#151515] mb-1">
                    {label}
                </label>
            )}
            <select
                name={name}
                id={id}
                className={`bg-[#F9F9F9] border  focus:outline-[#6A983C] focus:border-[#6A983C]   border-[#D1D1D1] text-[#151515] rounded-[12px] py-2 px-4 ${classes} `}
                defaultValue=""
            >
                {placeholder && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
