import React from "react"
import "./Button.css"

interface ButtonProps extends React.PropsWithChildren {
    onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {

    return (
        <button onClick={onClick} type='submit' className="button" >
            {children}
        </button >
    )
}