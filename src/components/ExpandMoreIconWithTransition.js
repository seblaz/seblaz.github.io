import React from 'react';
import {makeStyles} from "@material-ui/styles";
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    expand: {
        margin: theme.spacing(1, 1.3),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(0.4)
        },
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.complex,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default ({expanded}) => {
    const classes = useStyles();

    return (
        <ExpandMoreIcon
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
        />
    )
}
