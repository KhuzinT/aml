import React from 'react';
import './Surface.css'

const Surface = ({isOpen, onClick}) => {
    return (
        <div
            className={`surface ${isOpen ? 'visible' : ''}`}
            onClick={onClick}
        ></div>
    )
}

export default Surface;