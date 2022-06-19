import React from 'react'
import './Input.css'
const Input = ({ error, disabled, helperText, startIcon, endIcon, value, size, fullWidth, multiline, row }) => {
  // capitalize first letter of value
  const val = value && value.charAt(0).toUpperCase() + value.slice(1)
  // Writing input wrapper styles
  return (
    <div class={`inputform_wrapper ${error ? "error" : ""} ${disabled ? "disabled" : ""} ${size || ''} ${fullWidth ? "full-width" : ''}`}>
      <label>Label</label>
      <div className="input_wrapper">
        {startIcon && (<div className="material-symbols-outlined">
          {startIcon}
        </div>)}
        {multiline ? (<textarea className="input" placeholder="Placeholder" rows={row} value={val} disabled={disabled} />) : (<input type="text" placeholder="Placeholder" disabled={disabled} value={val} />)}

        {endIcon && (<div className="material-symbols-outlined">
          {endIcon}
        </div>)}
      </div>
      {helperText && (<span class="helper_text">{helperText}</span>)}
    </div>
  )
}

export default Input