import React, {Fragment} from 'react';
import MetaInfo from "components/common/MetaInfo";
import preview from "assets/img/compressed/previews/404.png";


export default () => {

    return (
        <Fragment>
            <MetaInfo
                title={'404 Not Found'}
                description='Error, página no encontrada.'
                relativeUrl='/404'
                image={preview}
            />
            <div>It looks like you are lost.</div>
        </Fragment>
    )
}