import React, {Fragment} from 'react';

const DisplayArea = ({data}) => {
    const contacts = data && data.map(client => {
        const { _id: id, _source: source } = client;
        const { firstname, lastname } = source;
        return (
            <Fragment key={id}>
                <div className="row display-item">
                    <div className="col-md-6 row-content">{firstname}</div>
                    <div className='col-md-6 row-content'>{lastname}</div>
                </div>
                <div className='content-divider' />
            </Fragment>
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
