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
            marginTop: theme.spacing(4),
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(2),
        },
    },
    centered: {
        display: 'flex',
        justifyContent: 'center'
    },
    smallButtons: {
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
                        color="primary"
                        size="large"
                        component={Link}
                        to="/experiencia_laboral"
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
                        color="primary"
                        size="large"
                        component={Link}
                        to="/proyectos"
                    >
                        Ver proyectos
                    </Button>
                </Grid>
            </Hidden>

            <Hidden smUp>
                <Grid item xs={12} className={classes.centered}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="medium"
                        component={Link}
                        to="/experiencia_laboral"
                        className={classes.smallButtons}
                    >
                        Ver Experiencia laboral
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.centered}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="medium"
                        component={Link}
                        to="/proyectos"
                        className={classes.smallButtons}
                    >
                        Ver proyectos
                    </Button>
                </Grid>
            </Hidden>
        </Grid>
    );
};