import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Logo from 'components/common/Logo';
import ThemeModeToggle from 'components/header/ThemeModeToggle';
import Drawer from 'components/header/Drawer';
import DesktopTabs from 'components/header/DesktopTabs';
import {Hidden} from '@material-ui/core';
import ChangeModeNotification from "components/header/ChangeModeNotification";


const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: 100
    },
    separator: {
        flexGrow: 1,
    },
    menuButton: {
        color: theme.palette.grey[50]
    },
    container: {
        display: 'flex'
    },
    themeModeToggle: {
        display: 'flex',
        alignItems: 'center'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const openDrawer = () => setDrawerOpen(true),
        closeDrawer = () => setDrawerOpen(false);

    return (
        <Fragment>
            <AppBar position='static' className={classes.appBar}>
                <Container fixed className={classes.container}>
                    <Logo/>
                    <div className={classes.separator}/>
                    <Hidden smDown>
                        <DesktopTabs/>
                        <ThemeModeToggle className={classes.themeModeToggle}/>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            className={classes.menuButton}
                            onClick={openDrawer}
                        >
                            <MenuIcon fontSize="large"/>
                        </IconButton>
                    </Hidden>
                </Container>
            </AppBar>
            <Drawer
                open={drawerOpen}
                onOpen={openDrawer}
                onClose={closeDrawer}
            />
            <ChangeModeNotification/>
        </Fragment>
    );
}
