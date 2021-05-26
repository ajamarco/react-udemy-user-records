import React from 'react'
import './Button.css'

export default function Button({children, btnType, handleClick}) {
    return (
        <div className="buttonWrapper">
            <button type={btnType || 'button'} className="submitUser" onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}
