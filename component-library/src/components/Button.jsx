import React from 'react'
import './Button.css'
const Button = ({ children, variant, disableShadow, disabled, size, color, startIcon, endIcon }) => {
    return (
        <button className={`${variant}${disableShadow === true ? " disableShadow" : " "}${disabled === true ? " disabled" : ""} ${size} ${color}`} disabled={disabled}>
            {startIcon && (<div className="material-symbols-outlined">
                {startIcon}
            </div>)}
            {children}

            {endIcon && (<div className="material-symbols-outlined">
                {endIcon}
            </div>)}
        </button>
    )
}

// Set default prop value of variant to default
Button.defaultProps = {
    color: 'default',
    variant: "",
    size: "md",
    children: "Default",
}

export default Button