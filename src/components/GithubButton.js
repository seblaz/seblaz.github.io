import React from 'react';
import {makeStyles} from '@material-ui/styles';
import GitHubIcon from 'assets/img/github icon.svg'

const useStyles = makeStyles(theme => ({
  gitHubButton: {
    font: 'bold 11px/14px "Helvetica Neue", Helvetica, Arial, sans-serif',
    height: '30px',
    margin: 'auto'
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
    marginRight: theme.spacing(1)
  },
  githubText: {
    fontSize: theme.typography.htmlFontSize
  }
}));

export default ({namespace, repo, anchor}) => {
  const classes = useStyles();
  const getRepoUrl = () => {
    return `//github.com/${namespace}/${repo}/#${anchor}`;
  };

  return (
    <span className={classes.gitHubButton}>
      <a className={classes.gitHubLink} href={getRepoUrl()} target="_blank" rel="noopener noreferrer">
        <img src={GitHubIcon} className={classes.gitHubIcon} aria-hidden="true" alt='github icon'/>
        <span className={classes.githubText}>Ver en Github</span>
      </a>
    </span>
  );
}