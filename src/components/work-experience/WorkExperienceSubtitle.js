import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";


const calculatePeriod = (from, to = new Date()) => {
    let months = (to.getFullYear() - from.getFullYear()) * 12;
    months -= from.getMonth();
    months += to.getMonth();

    const years = Math.floor(months / 12);
    months -= (years * 12);

    const yearsString = years > 0 ? years + (years > 1 ? ' años' : ' año') : '';
    const monthString = months > 0 ? months + (months > 1 ? ' meses' : ' mes') : '';
    return `${years > 0 ? yearsString + (months > 0 ? ' y ' : '') : ''}${months > 0 ? monthString : ''}`;
};

const dateToString = (date) => {
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return capitalize(date.toLocaleDateString('es-AR', {year: 'numeric', month: 'short'}));
};

const useStyles = makeStyles(theme => ({
    subheader: {
        color: theme.palette.text.secondary
    },
    span: {
        display: 'inline-block'
    }
}));

export default ({city, from, to}) => {
    const classes = useStyles();
    const period = `${dateToString(from)} \u2013 ${to ? dateToString(to) : 'actualidad'}`;
    const duration = calculatePeriod(from, to);

    return (
        <div className={classes.subheader}>
            {/* lg to md */}
            <Hidden smDown>
                <Typography variant="body1">
                    {city},&ensp;{period}&ensp; &#183; &ensp;{duration}
                </Typography>
            </Hidden>
            {/* sm */}
            <Hidden mdUp xsDown>
                <Typography variant="body1">
                    {period}&ensp;&#183;&ensp;{duration}
                </Typography>
                <Typography variant="body2">
                    {city}
                </Typography>
            </Hidden>
            {/* xs */}
            <Hidden smUp>
                <Typography variant="body2">
                    <span className={classes.span}>{period} &#183;&nbsp;</span>
                    <span className={classes.span}> {duration}</span>
                </Typography>
                <Typography variant="body2">
                    {city}
                </Typography>
            </Hidden>
        </div>
    )
}
