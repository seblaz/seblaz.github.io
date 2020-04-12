import React from 'react';
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        // Display.
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh)',
        // Color.
        backgroundColor: theme.palette.background.default
    }
}));

export default ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}
