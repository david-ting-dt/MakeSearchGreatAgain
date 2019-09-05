import React from 'react';

const Contents = props => {
    const clients = props.data.map(client => {
        const { _id: id, _source: source } = client;
        const { firstname, lastname } = source;
        return (
            <div key={id} className="row">
                <div className="col-md-6 jc">{firstname}</div>
                <div className='col-md-6 jc'>{lastname}</div>
            </div>
        )
    });

    return (
        <div className='contents cf'>
            <div className='row content-header'>
                <div className='col-md-6 jc'>
                    First name
                </div>
                <div className='col-md-6 jc'>
                    Last name
                </div>
            </div>
            <div className="header-line"/>
            {clients}
        </div>
    );
}

export default Contents;
