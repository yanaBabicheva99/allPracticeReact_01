import React from 'react';

const MyInput =React.forwardRef((props, ref) => {
    return (
        <input {...props} ref={ref} className='form-control m-2'/>
    );
});

export default MyInput;