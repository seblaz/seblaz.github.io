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
        width: '100%'
    },
    title:{
        [theme.breakpoints.only('xs')]: {
            fontSize: '4rem'
        }
    },
    subtitle: {
        textAlign: 'right',
        paddingTop: theme.spacing(5),
        [theme.breakpoints.only('xs')]: {
            fontSize: '1.7rem'
        }
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
                    <Typography variant="h4" className={classes.subtitle}>Estudiante de Ingeniería en
                        Informática</Typography>
                </div>
            </Container>
        </Fragment>
    );
};