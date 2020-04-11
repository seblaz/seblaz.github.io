import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ReactComponent as GitHubIcon} from 'assets/img/github icon.svg'

const useStyles = makeStyles(theme => ({
    gitHubButton: {
        font: 'bold 11px/14px "Helvetica Neue", Helvetica, Arial, sans-serif',
        height: '30px',
    },
    gitHubLink: {
        height: '100%',
        float: 'left',
        padding: theme.spacing(0.5, 1),
        color: '#333',
        textDecoration: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundImage: 'linear-gradient(to bottom, #fcfcfc 0, #eee 100%)',
        border: '1px solid #d5d5d5',
        display: 'flex',
        alignItems: 'center',
        '&:hover, &:focus': {
            backgroundImage: 'linear-gradient(to bottom, #eee 0, #ddd 100%)',
            borderColor: '#ccc',
        }
    },
    gitHubIcon: {
        float: 'left',
        height: '100%',
        width: 'auto',
        marginRight: theme.spacing(1),
        fill: theme.palette.secondary.dark
    },
    githubText: {
        fontSize: theme.typography.htmlFontSize,
        color: theme.palette.secondary.dark
    },
    [theme.breakpoints.down('md')]: {
        gitHubButton: {
            display: 'flex'
        },
        gitHubLink: {
            margin: 'auto'
        }
    }
}));

export default ({namespace, repo, anchor}) => {
    const classes = useStyles();
    const getRepoUrl = () => {
        return `//github.com/${namespace}/${repo}/#${anchor}`;
    };

    return (
        <div className={classes.gitHubButton}>
            <a
                href={getRepoUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.gitHubLink}
                onTouchEnd={(e) => e.stopPropagation()}
            >
                <GitHubIcon className={classes.gitHubIcon}/>
                <span className={classes.githubText}>Ver en Github</span>
            </a>
        </div>
    );
}