import React from 'react';

const Button = ({ btn_text }) => {
    return (
        <button className='main-btn'>
            {btn_text}
        </button>
    );
};

export default Button;