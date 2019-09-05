import React from 'react';

const Contents = props => {
    const clients = props.data.map(client => {
        const { _id: id, _source: source } = client;
        const { firstname, lastname } = source;
        return (
            <>
                <div key={id} className="row content-item">
                    <div className="col-md-6 row-content">{firstname}</div>
                    <div className='col-md-6 row-content'>{lastname}</div>
                </div>
                <div className='content-divider' />
            </>
        )
    });

    return (
        <div className='contents'>
            <div className='row content-header'>
                <div className='col-md-6 row-content'>
                    First name
                </div>
                <div className='col-md-6 row-content'>
                    Last name
                </div>
            </div>
            <div className="header-line" />
            {clients}
        </div>
    );
}

export default Contents;
