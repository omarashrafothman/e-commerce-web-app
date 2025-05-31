import React from "react";
import { CheckboxProps } from "../../types/types"

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    label,
    name,
    checked,
    onChange,
    className = "",
}) => {
    return (
        <label className={`inline-flex items-center gap-2 cursor-pointer ${className} w-auto`}>
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                className="peer hidden"
            />
            <div className="
        w-[20px] h-[20px]
         border-[#D1D1D1] border-[1.5px]
        rounded 
        flex items-center justify-center
        peer-checked:bg-[#46760A] 
        peer-checked:border-[#46760A]
        transition
      ">
                {/* ✅ علامة صح تظهر داخل المربع */}
                <svg
                    className="hidden peer-checked:block w-[14px] h-[14px] text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            {label && <span className="text-sm text-[#151515]">{label}</span>}
        </label>
    );
};

export default Checkbox;
