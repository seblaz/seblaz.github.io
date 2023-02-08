import React, {Fragment} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    opaqueOverlay: {
        background: 'black',
        opacity: 0.5,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    container: {
        height: '100%',
        color: 'white',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    titleWrapper: {
        width: '100%',
        marginTop: 'calc(-432px + 61.2vh)',
        [theme.breakpoints.up('md')]: {
            '@media (min-height:0px) and (max-height:620px)': {
                marginTop: theme.spacing(2),
            },
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: 'calc(-272px + 47vh)',
            '@media (min-height:0px) and (max-height:550px)': {
                marginTop: theme.spacing(2),
            },
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: 'calc(-230px + 46vh)',
            '@media (min-height:0px) and (max-height:470px)': {
                marginTop: theme.spacing(2),
            },
        },
    },
    title:{
        fontSize: '5rem',
        [theme.breakpoints.only('sm')]: {
            fontSize: '3.7rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '3rem'
        }
    },
    subtitle: {
        textAlign: 'right',
        paddingTop: 'calc(-28px + 33vh)',
        [theme.breakpoints.up('md')]: {
            '@media (min-height:0px) and (max-height:620px)': {
                paddingTop: theme.spacing(2),
            },
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: 'calc(30vh)',
            fontSize: '1.8rem',
            '@media (min-height:0px) and (max-height:550px)': {
                paddingTop: theme.spacing(2),
            },
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '1.7rem',
            '@media (min-height:0px) and (max-height:470px)': {
                paddingTop: theme.spacing(2),
            },
        },
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.opaqueOverlay}/>
            <Container fixed maxWidth="md" className={classes.container}>
                <div className={classes.titleWrapper}>
                    <Typography variant="h1" className={classes.title}>Sebastián</Typography>
                    <Typography variant="h1" className={classes.title}>Blázquez</Typography>
                    <Typography variant="h4" className={classes.subtitle}>Software Engineering Student</Typography>
                </div>
            </Container>
        </Fragment>
    );
};
