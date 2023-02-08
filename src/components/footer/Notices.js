import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {faGlobe, faCameraRetro} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Hidden} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.primary.lighter(70),
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(4)
        }
    },
    item: {
        [theme.breakpoints.only('xs')]: {
            display: 'flex',
            width: '100%'
        }
    },
    itemContent: {
        [theme.breakpoints.only('xs')]: {
            margin: 'auto'
        },
    },
    text: {
        display: 'inline'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
    copyright: {
        [theme.breakpoints.only('sm')]: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
        }
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item className={classes.item}>
                <div className={classes.itemContent}>
                    <FontAwesomeIcon icon={faGlobe}/>
                    <Typography variant='h6' className={classes.text}> by Seblaz<Hidden only='xs'> | </Hidden></Typography>
                </div>
            </Grid>
            <Grid item className={classes.item}>
                <div className={classes.itemContent}>
                    <a
                        className={classes.link}
                        href='https://www.instagram.com/thomasalanhas/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faCameraRetro}/>
                        <Typography variant='h6' className={classes.text}> by Thomas Alan Has<Hidden smDown> | </Hidden></Typography>
                    </a>
                </div>
            </Grid>
            <Grid item className={`${classes.item} ${classes.copyright}`}>
                <div className={classes.itemContent}>
                    <Typography variant='h6' className={classes.text}>Copyright © {new Date().getFullYear()}</Typography>
                </div>
            </Grid>
        </Grid>
    )
}
