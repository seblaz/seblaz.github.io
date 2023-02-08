import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import perfil from 'assets/img/compressed/perfil.jpeg';
import Divider from "@material-ui/core/Divider";
import {Hidden} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    title: {
        [theme.breakpoints.up('md')]: {
            paddingBottom: theme.spacing(2)
        }
    },
    [theme.breakpoints.down('sm')]: {
        textParagraph: {
            fontSize: '1.3rem'
        },
    },
    avatarWrapper: {
        display: 'flex'
    },
    avatar: {
        width: 350,
        height: 360,
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: 230,
            height: 235,
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(1)
        }
    },
    dividerWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    dividerRoot: {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.lighter(50)
    }
}));

export default () => {
    const classes = useStyles();
    const secondTextParagraph = (
        <Typography variant="h5" className={classes.textParagraph}>
            I'm interested in web application development, both frontend and backend,
            and working on a development team where I can learn and collaborate as a group.
            Additionally, I like applying best practices of Agile methods and Software
            Engineering techniques.
        </Typography>
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.title}>
                    About me
                </Typography>
            </Grid>
            <Grid item xs={12} md={7} lg={6}>
                <Typography variant="h5" className={classes.textParagraph}>
                    I'm a Software Engineering student at the University of Buenos Aires.
                    Currently, I'm in the final year of university and have work experience
                    developing software in Python, Golang, JavaScript, and PHP.
                    I also have knowledge in C, C++, Java, AWS, Kubernetes, HTML, CSS,
                    and Agile methods.
                </Typography>
                <Hidden mdDown>
                    <br/><br/>
                    {secondTextParagraph}
                </Hidden>
            </Grid>
            {/* Vertical divider */}
            <Hidden mdDown>
                <Grid item sm={1} className={classes.dividerWrapper}>
                    <Divider orientation="vertical" classes={{root: classes.dividerRoot}}/>
                </Grid>
            </Hidden>
            {/* Photo */}
            <Grid item xs={12} md={5} className={classes.avatarWrapper}>
                <Avatar src={perfil} className={classes.avatar}/>
            </Grid>
            <Hidden lgUp>
                <Grid item xs={12} md={12}>
                    {secondTextParagraph}
                </Grid>
            </Hidden>
        </Grid>
    );
};
