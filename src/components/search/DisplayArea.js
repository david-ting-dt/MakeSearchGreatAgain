import React, { Fragment } from 'react';

const DisplayArea = (props) => {

    //     const showModal = () => {
    // props.ca
    //     }

    const contacts = props.data && props.data.map(client => {
        const { _id: id, _source: source } = client;
        const { firstname, lastname, contactType } = source;
        return (
            <Fragment key={id}>
                <div className="row display-item" onClick={() => props.callback(source)}>
                    <div className='col-md-4 row-content'>{contactType}</div>
                    <div className="col-md-4 row-content">{firstname}</div>
                    <div className='col-md-4 row-content'>{lastname}</div>
                </div>
                <div className='content-divider' />
            </Fragment>
        )
    });

    return (
        <div className='display-area'>
            <div className='row display-area-header'>
                <div className='col-md-4 row-content'>
                    Type
                </div>
                <div className='col-md-4 row-content'>
                    First name
                </div>
                <div className='col-md-4 row-content'>
                    Last name
                </div>
            </div>
            <div className="header-line" />
            {contacts}
        </div>
    );
}

export default DisplayArea;
