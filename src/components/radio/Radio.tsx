import React from "react";

interface RadioProps {
    id: string;
    label?: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Radio: React.FC<RadioProps> = ({
    id,
    label,
    name,
    value,
    checked,
    onChange,
    className = "",
}) => {
    return (
        <label htmlFor={id} className={`flex items-center gap-2 cursor-pointer ${className}`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="peer hidden"
            />
            <div
                className={`
            w-[20px] h-[20px]
            border-[1.5px] border-[#D1D1D1]
            rounded-full
            relative flex items-center justify-center
            transition
            peer-checked:border-[#46760A]
            peer-checked:border-[5px]
          `}
            >

                <div className="w-[10px] h-[10px] bg-[#46760A] rounded-full peer-checked:block hidden"></div>
            </div>
            {label && <span className=" font-semibold text-[#151515]">{label}</span>}
        </label>
    );
};

export default Radio;
