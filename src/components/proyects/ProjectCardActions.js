import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import GithubButton from 'components/proyects/GithubButton';
import LinkedInButton from "components/proyects/LinkedInButton";
import {useSpring, animated} from 'react-spring';
import {makeStyles, useTheme} from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
    linksWrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'block',
        }
    }
}));

export default ({show, linkedInUrl, ...other}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));

    const maxHeight = linkedInUrl && matchesMdDown ? 90 : 46;

    const [{height}, setHeight] = useSpring(() => ({
        height: 0
    }));

    setHeight({
        height: show ? maxHeight : 0
    });

    return (
        <animated.div style={{display: 'block', height: height}}>
            <CardActions>
                <div className={classes.linksWrapper}>
                    <GithubButton {...other}/>
                    {linkedInUrl && <LinkedInButton linkedInUrl={linkedInUrl}/>}
                </div>
            </CardActions>
        </animated.div>
    )
}