import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import background from 'assets/img/compressed/background.jpeg';
import {Parallax} from 'react-parallax';
import HomePresentationContent from "components/home/HomePresentationContent";


const useStyles = makeStyles(theme => ({
    root: {
        height: 'calc(100vh - 84px)' // 84px = header height
    },
    parallaxContent: {
        height: '100%'
    },
    image: {
        top: -100,
        [theme.breakpoints.only('xs')]: {
            '@media (min-height:460px)': {
                left: '0% !important',
            },
        }
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Parallax
            strength={400}
            bgImage={background}
            className={classes.root}
            bgClassName={classes.image}
            contentClassName={classes.parallaxContent}
        >
            <HomePresentationContent/>
        </Parallax>
    );
};
