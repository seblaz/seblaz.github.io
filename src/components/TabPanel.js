import React, {Fragment} from 'react';
import Box from '@material-ui/core/Box';

export default (props) => {
  const { children, selectedTab, index } = props;

  return (
    <Fragment>
      {selectedTab === index && <Box p={3}>{children}</Box>}
    </Fragment>
  );
}