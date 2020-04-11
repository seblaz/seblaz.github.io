import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const useStyles = makeStyles(theme => ({
    wrapper:{
        marginLeft: 0
    },
    link: {
        // Border.
        borderColor: theme.palette.secondary.main,
        borderWidth: 1,
        borderRadius: 2,
        borderStyle: 'solid',
        // Font.
        color: theme.palette.secondary.dark,
        textDecoration: 'none',
        fontSize: theme.typography.htmlFontSize,
        // Spacing.
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        padding: theme.spacing(0, 2)
    },
    linked: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 4,
        paddingRight: 1
    },
    icon: {
        marginBottom: 2,
        fontSize: 20
    },
    [theme.breakpoints.down('md')]: {
        wrapper: {
            display: 'flex',
            marginTop: theme.spacing(1.5)
        },
        link: {
            margin: 'auto'
        }
    }
}));

export default ({linkedInUrl}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
            >
                Ver en <span className={classes.linked}>Linked</span>
                <FontAwesomeIcon icon={faLinkedin} className={classes.icon}/>
            </a>
        </div>
    )
}