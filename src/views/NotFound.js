import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";


export default () => {

    return (
        <Fragment>
            <Helmet
                title={'Seblaz | 404 Not Found'}
                meta={[
                    {name: 'ROBOTS', content: 'NOINDEX'},
                    {name: 'description', content: '404 Not found'}
                ]}
            />
            <div>It looks like you are lost.</div>
        </Fragment>
    )
}