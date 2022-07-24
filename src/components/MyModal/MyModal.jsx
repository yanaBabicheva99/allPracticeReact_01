import React from 'react';
import './MyModal.css'
const MyModal = ({children, visible, setVisible}) => {
    return (
        <div
            className={'myModal ' + (visible? 'active' : '')}
            onClick={() => setVisible(false)}
        >
            <div
                className={'myModalContent'}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;