import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import {Snackbar} from "@material-ui/core";
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import curriulum from "assets/Curriculum_Vitae.pdf";


const useStyles = makeStyles(theme => ({
    downloadButtonWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    downloadButton: {
        color: 'white',
        margin: theme.spacing(2, 0)
    },
    confirmationPaper: {
        borderRadius: theme.shape.borderRadius * 2,
        display: 'flex',
        padding: '6px 16px',
        // Colors.
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.secondary.lighter(80),
        '& $icon': {
            color: theme.palette.secondary.main,
        },
    },
    confirmationIcon: {
        marginRight: 12,
        padding: '7px 0',
        display: 'flex',
        fontSize: 22,
        opacity: 0.9,
    },
    confirmationMessage: {
        padding: '8px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}));

export default () => {
    const classes = useStyles();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const onDownloadClick = () => setShowConfirmation(true);
    const onCloseConfirmation = () => setShowConfirmation(false);

    return (
        <Grid item xs={12} className={classes.downloadButtonWrapper}>
            <Button
                variant="contained"
                color="secondary"
                href={curriulum}
                download="Curriculum Sebastián Blázquez.pdf"
                size="large"
                onClick={onDownloadClick}
                onAbort={() => console.log('something changed')}
                className={classes.downloadButton}
            >
                Descargar curriculum
            </Button>
            <Snackbar
                open={showConfirmation}
                autoHideDuration={5000}
                onClose={onCloseConfirmation}
            >
                <Paper
                    square
                    elevation={0}
                    className={classes.confirmationPaper}
                >
                    <div className={classes.confirmationIcon}>
                        <CheckCircleOutline/>
                    </div>
                    <div className={classes.confirmationMessage}>
                        <Typography className={classes.snackbarContent}>
                            ¡Descarga iniciada!
                        </Typography>
                    </div>
                </Paper>
            </Snackbar>
        </Grid>
    )
}
