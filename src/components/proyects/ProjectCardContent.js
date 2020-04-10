import React, {Fragment} from 'react';
import {Typography} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/styles';
import ProjectCardActions from 'components/proyects/ProjectCardActions';
import Color from 'color';

const useStyles = makeStyles(theme => ({
    media: {
        height: 140,
    },
    titleContainer: {
        position: 'relative',
        textAlign: 'center'
    },
    title: {
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    backgroundOverlay: {
        background: ({backgroundOpacity}) => Color('black').alpha(0.35 + backgroundOpacity).rgb().string(),
        height: '100%'
    },
    actionArea: {
        "&:hover $focusHighlight": {
            opacity: 0
        }
    },
    focusHighlight: {}
}));

export default ({title, imgSource, description, backgroundOpacity, cardFocused, ...gitHubProps}) => {
    const classes = useStyles({backgroundOpacity: backgroundOpacity || 0});

    return (
        <Fragment>
            <CardActionArea classes={{
                root: classes.actionArea,
                focusHighlight: classes.focusHighlight
            }}>
                <div className={classes.titleContainer}>
                    <CardMedia
                        className={classes.media}
                        image={imgSource}
                        title={title}
                    >
                        <div className={classes.backgroundOverlay}/>
                    </CardMedia>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </div>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <ProjectCardActions show={cardFocused} {...gitHubProps}/>
        </Fragment>
    )
}
