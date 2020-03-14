import React from 'react';
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        width: 100,
        height: 100,
        backgroundImage: ({logo}) => `url(${logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        [theme.breakpoints.down('xs')]: {
            width: 60,
            height: 60,
        }
    }
}));

export default ({logo}) => {
    const classes = useStyles({logo});

    return (
        <div className={classes.root}/>
    )
}
