import React, {Fragment} from "react";
import {makeStyles} from '@material-ui/core/styles';
import HomePresentation from "components/home/HomePresentation";
import ContentWrapper from "components/common/ContentWrapper";
import Paper from "@material-ui/core/Paper";
import AboutMe from "components/home/AboutMe";
import HomeLinks from "components/home/HomeLinks";
import MetaInfo from "components/common/MetaInfo";

import preview from "assets/img/compressed/previews/home.png";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(5),
        [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(2),
        }
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Fragment>
            <MetaInfo
                description='Portfolio de Sebastián Blázquez.'
                image={preview}
            />
            <HomePresentation/>
            <ContentWrapper>
                <Paper className={classes.paper}>
                    <AboutMe/>
                    <HomeLinks/>
                </Paper>
            </ContentWrapper>
        </Fragment>
    );
};