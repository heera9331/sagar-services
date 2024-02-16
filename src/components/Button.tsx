/* eslint-disable react/prop-types */
interface ButtonProps {
  text: string, onClick: (e: any) => void, className?: string, type?: string
}

const Button = ({ text, onClick, className,type, ...props }: ButtonProps) => {
  return (
    <button
      type={`${type ? type : "button"}`}
      className={`bg-stone-800 text-white rounded-sm py-1 px-2 hover:bg-stone-900 ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
