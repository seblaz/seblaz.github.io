import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import {Hidden} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(0),
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: theme.spacing(4.5),
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(2),
        },
    },
    centered: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        color: theme.palette.secondary[theme.palette.contrastType],
        borderColor: theme.palette.secondary[theme.palette.contrastType]
    },
    smallButton: {
        margin: theme.spacing(1, 0)
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Grid container justify="space-around" className={classes.root}>
            <Hidden only={['xs']}>
                <Grid item md={6} className={classes.centered}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        component={Link}
                        to="/experiencia_laboral"
                        className={classes.button}
                    >
                        Ver Experiencia laboral
                    </Button>
                </Grid>
                <Hidden smDown>
                    <Grid item md={1} className={classes.centered}/>
                </Hidden>
                <Grid item md={5} className={classes.centered}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        component={Link}
                        to="/proyectos"
                        className={classes.button}
                    >
                        Ver proyectos
                    </Button>
                </Grid>
            </Hidden>

            <Hidden smUp>
                <Grid item xs={12} className={classes.centered}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="medium"
                        component={Link}
                        to="/proyectos"
                        className={`${classes.smallButton} ${classes.button}`}
                    >
                        Ver proyectos
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.centered}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="medium"
                        component={Link}
                        to="/experiencia_laboral"
                        className={`${classes.smallButton} ${classes.button}`}
                    >
                        Ver Experiencia laboral
                    </Button>
                </Grid>
            </Hidden>
        </Grid>
    );
};