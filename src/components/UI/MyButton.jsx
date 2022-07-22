import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='btn btn-light btn-sm m-2'>
            {children}
        </button>
    );
};

export default MyButton;