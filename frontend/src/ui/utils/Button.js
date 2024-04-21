import React from 'react';

const Button = ({
    onClick,
    content,
    contentColor = 'black',
    contentMargin = '0',
    background = '#a09f9f',
    width = '',
    padding = '30px',
    margin = '10px 10px 10px 0',
    borderColor = 'black'
}) => {
    const buttonStyle = {
        background,
        border: `3px solid ${borderColor}`,
        borderRadius: '15px',
        padding,
        width,
        margin,
        cursor: 'pointer',
    };

    const contentStyle = {
        color: contentColor,
        margin: contentMargin,
    };

    return (
        <div style={buttonStyle} onClick={onClick}>
            <div style={contentStyle}>{content}</div>
        </div>
    );
};

export default Button;