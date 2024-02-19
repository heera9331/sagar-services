"use client"
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

interface InputProps {
    label: string, htmlFor: string, value: any, onChange: (e?: any) => void, type?: string, placeholder?: string, className?: string, labelColor?: string, inputColor?: string
}

const Input: React.FC<InputProps> = ({
    label,
    htmlFor,
    value,
    onChange,
    type,
    className,
    placeholder,
    labelColor,
    inputColor,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-2 m-1 p-1">
            <label
                className={`${labelColor ? labelColor : "text-black"}`}
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input
                type={type ? type : "text"}
                value={value}
                className={` p-1 border border-black border-opacity-25 rounded-sm focus: outline-none ${className} ${inputColor ? inputColor : "text-black bg-slate-100"
                    }`}
                placeholder={placeholder ? placeholder : ""}
                name={htmlFor}
                onChange={onChange}
                {...props}
                required
            />
        </div>
    );
};

export default Input;