import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?: string,
}

function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={`h-[70px] text-[25px] font-roboto px-8 rounded-[2px] border-transparent bg-primary border-2 uppercase text-white hover:bg-primary-light hover:text-primary transition-[0.2s] hover:border-primary ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button