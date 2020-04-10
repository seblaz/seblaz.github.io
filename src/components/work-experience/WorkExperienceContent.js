import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {CardContent} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 0
    },
    description: {
        marginLeft: 100 + theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
        description: {
            marginLeft: 60 + theme.spacing(1)
        },
        root: {
            padding: theme.spacing(1)
        }
    }
}));

export default ({description}) => {
    const classes = useStyles();

    return (
        <CardContent className={classes.root}>
            <Typography variant="body1" className={classes.description}>{description}</Typography>
        </CardContent>
    )
}
