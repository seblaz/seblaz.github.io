import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {makeStyles} from "@material-ui/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import WorkExperienceTitle from "./WorkExperienceTitle";
import WorkExperienceSubtitle from "./WorkExperienceSubtitle";
import ExpandMoreIconWithTransition from "./ExpandMoreIconWithTransition";
import WorkExperienceLogo from "./WorkExperienceLogo";
import WorkExperienceContent from "./WorkExperienceContent";


const useStyles = makeStyles(theme => ({
    // Component styles.
    root: {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
    },
    actionArea: {
        "&:hover $focusHighlight": {
            opacity: 0
        }
    },
    focusHighlight: {},

    // CardHeader customizations.
    [theme.breakpoints.down('xs')]: {
        cardHeader: {
            padding: theme.spacing(1)
        },
        avatar: {
            marginRight: theme.spacing(1)
        },
        action:{
            position: 'absolute',
            right: theme.spacing(1),
        }
    }
}));

export default ({title, workplace, city, from, to, description, logo}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={handleExpandClick}
                classes={{
                    root: classes.actionArea,
                    focusHighlight: classes.focusHighlight
                }}
            >
                <CardHeader
                    disableTypography={true}
                    classes={{root: classes.cardHeader, avatar: classes.avatar, action: classes.action}}
                    avatar={<WorkExperienceLogo logo={logo}/>}
                    title={<WorkExperienceTitle title={title} workplace={workplace}/>}
                    subheader={<WorkExperienceSubtitle city={city} from={from} to={to}/>}
                    action={<ExpandMoreIconWithTransition expanded={expanded}/>}
                />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <WorkExperienceContent description={description}/>
                </Collapse>
            </CardActionArea>
        </Card>
    )
}
