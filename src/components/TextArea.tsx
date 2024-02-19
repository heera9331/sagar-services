/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
interface TextAreaProps {
    label: string, htmlFor: string, value: any, onChange: (e?: any) => void, placeholder?: string, className?: string, labelColor?: string, inputColor?: string
}

const Input = ({
    label,
    htmlFor,
    value,
    onChange,
    className,
    ...props
}: TextAreaProps) => {
    return (
        <div className="flex flex-col gap-2 m-1 p-1">
            <label htmlFor={htmlFor}>{label}</label>
            <textarea
                value={value}
                onChange={onChange}
                className={` p-1 border border-black border-opacity-25 rounded-sm focus: outline-none text-black bg-slate-100 ${className} `}
                {...props}
            />
        </div>
    );
};

export default Input;