import React from 'react';
import {Typography} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/styles';
import ProjectCardActions from 'components/proyects/ProjectCardActions';
import Color from 'color';
import ExpandMoreIconWithTransition from "components/common/ExpandMoreIconWithTransition";


const useStyles = makeStyles(theme => ({
    // Remove weird highlight.
    actionArea: {
        "&:hover $focusHighlight": {
            opacity: 0
        }
    },
    focusHighlight: {},
    // Other.
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
    expandMore: {
        position: 'absolute',
        right: 0,
        bottom: 0
    }
}));

export default ({title, imgSource, description, backgroundOpacity, cardFocused, onTouchEnd, ...other}) => {
    const classes = useStyles({backgroundOpacity: backgroundOpacity || 0});

    return (
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
                    <span>{'\xa0'.repeat(10)}</span>{/* Pequeño hack para no superponer el ícono y el texto. \xa0 = non breaking space. */}
                </Typography>
                <div className={classes.expandMore}>
                    <ExpandMoreIconWithTransition
                        onTouchEnd={onTouchEnd}
                        expanded={cardFocused}
                    />
                </div>
            </CardContent>
            <ProjectCardActions show={cardFocused} {...other}/>
        </CardActionArea>
    )
}
