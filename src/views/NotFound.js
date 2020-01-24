import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

export default () => {

  return (
    <Fragment>
      <Helmet
        title={'404 Not Found'}
        meta={[
          {name: 'ROBOTS', content: 'NOINDEX'}
        ]}
      />
      <div>It looks like you are lost.</div>
    </Fragment>
  )
}