import React, {useContext, useEffect, useRef, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Snackbar, SnackbarContent} from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import ThemeModeContext from "contexts/ThemeModeContext";


const useStyles = makeStyles(theme => ({
    snackbarRoot: {
        marginBottom: theme.spacing(3)
    },
    contentRoot: {
        minWidth: 'auto',
        flexGrow: 'initial',
        background: theme.palette.secondary[theme.palette.type],
    },
    contentMessage: {
        color: theme.palette.text.primary,
        fontSize: 18
    }
}));

export default () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const {themeMode} = useContext(ThemeModeContext);

    const isFirstRun = useRef(true);

    useEffect(() => {
        // Don't run on initialize.
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        setShow(true);
    }, [themeMode]);

    const onClose = (event, reason) => {
        if (reason === 'timeout') setShow(false);
    };

    const temas = {
        'dark': 'Dark',
        'light': 'Light'
    };

    return (
        <Snackbar
            open={show}
            autoHideDuration={3000}
            onClose={onClose}
            classes={{root: classes.snackbarRoot}}
            TransitionComponent={Slide}
        >
            <SnackbarContent
                message={`${temas[themeMode]} theme enabled`}
                classes={{
                    root: classes.contentRoot,
                    message: classes.contentMessage
                }}
            />
        </Snackbar>
    )
}
