import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    smallTitle: {
        marginRight: theme.spacing(3.5),
        lineHeight: 1.4,
        padding: '4px 0'
    }
}));


export default ({title, workplace}) => {
    const classes = useStyles();

    return (
        <Fragment>
            {/* lg to sm */}
            <Hidden xsDown>
                <Typography variant="h6">{workplace}</Typography>
                <Typography variant="subtitle1">{title}</Typography>
            </Hidden>
            {/* xs */}
            <Hidden smUp>
                <Typography variant="subtitle1" className={classes.smallTitle}>{workplace}</Typography>
                <Typography variant="subtitle2">{title}</Typography>
            </Hidden>
        </Fragment>
    )
}
