import React, { Fragment } from 'react';

const Modal = props => {
    const details = Object.keys(props.data).map((key, index) => {
        // if (key !== 'id') {
        return (
            <div key={index} className='info-line d-flex'>
                <div className='info-key'>
                    {key}
                </div>
                <div className='info-value'>
                    {props.data[key]}
                </div>
            </div>
        );
        // }
    });

    return (
        <div className='modal' onClick={props.callback}>
            <div className='modal-body'>
                {details}
            </div>
        </div>
    );
}

export default Modal;
