import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import curriulum from "assets/doc/Curriculum_Vitae.pdf";


const useStyles = makeStyles(theme => ({
    downloadButtonWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    downloadButton: {
        color: 'white',
        margin: theme.spacing(2, 0)
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.downloadButtonWrapper}>
            <Button
                variant="contained"
                color="secondary"
                href={curriulum}
                download="Curriculum Sebastián Blázquez.pdf"
                size="large"
                onAbort={() => console.log('something changed')}
                className={classes.downloadButton}
            >
                Descargar curriculum
            </Button>
        </Grid>
    )
}
