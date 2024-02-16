/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
interface TextAreaProps {
    label: string, htmlFor: string, value: any, onChange: () => {}, placeholder?: string, className?: string, labelColor?: string, inputColor?: string
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
        <div>
            <label htmlFor={htmlFor}>{label}</label>
            <textarea
                value={value}
                onChange={onChange}
                className={`` + className}
                {...props}
            />
        </div>
    );
};

export default Input;