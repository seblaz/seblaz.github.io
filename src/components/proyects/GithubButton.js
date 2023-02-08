import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {ReactComponent as GitHubIcon} from 'assets/img/originals/github icon.svg'

const themedStyles = {
    dark: {
        gitHubLink: {
            borderColor: '#383838',
            background: 'linear-gradient(#2a2a2a, #1a1a1a)',
            '&:hover, &:focus': {
                background: 'linear-gradient(#303030, #282828)',
                borderColor: '#484848'
            }
        }
    },
    light: {
        gitHubLink: {
            borderColor: '#d5d5d5',
            background: 'linear-gradient(to bottom, #fcfcfc 0, #eee 100%)',
            '&:hover, &:focus': {
                background: 'linear-gradient(to bottom, #eee 0, #ddd 100%)',
                borderColor: '#ccc',
            }
        }
    }
};

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
        borderWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        ...themedStyles[theme.palette.type]['gitHubLink'],
    },
    gitHubIcon: {
        float: 'left',
        height: '100%',
        width: 'auto',
        marginRight: theme.spacing(1),
        fill: theme.palette.secondary[theme.palette.contrastType]
    },
    githubText: {
        fontSize: theme.typography.htmlFontSize,
        color: theme.palette.secondary[theme.palette.contrastType]
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
                <span className={classes.githubText}>See in Github</span>
            </a>
        </div>
    );
}
