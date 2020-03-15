import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import background from 'assets/img/background.jpg';
import {Parallax} from 'react-parallax';
import HomePresentationContent from "./HomePresentationContent";


const useStyles = makeStyles(theme => ({
    root: {
        height: 'calc(100vh - 84px)' // 84px = header height
    },
    parallaxContent: {
        height: '100%'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Parallax
            strength={400}
            bgImage={background}
            className={classes.root}
            contentClassName={classes.parallaxContent}
        >
            <HomePresentationContent/>
        </Parallax>
    );
};
