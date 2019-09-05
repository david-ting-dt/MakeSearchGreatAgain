import React from 'react';

const DisplayArea = props => {
    const contacts = props.data.map(client => {
        const { _id: id, _source: source } = client;
        const { firstname, lastname } = source;
        return (
            <>
                <div key={id} className="row display-item">
                    <div className="col-md-6 row-content">{firstname}</div>
                    <div className='col-md-6 row-content'>{lastname}</div>
                </div>
                <div className='content-divider' />
            </>
        )
    });

    return (
        <div className='display-area'>
            <div className='row display-area-header'>
                <div className='col-md-6 row-content'>
                    First name
                </div>
                <div className='col-md-6 row-content'>
                    Last name
                </div>
            </div>
            <div className="header-line" />
            {contacts}
        </div>
    );
}

export default DisplayArea;