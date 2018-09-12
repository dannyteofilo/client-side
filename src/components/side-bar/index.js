import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import PersonIcon from '@material-ui/icons/Person';
import ChildIcon from '@material-ui/icons/Face';
import BillIcon from '@material-ui/icons/CollectionsBookmark';
import BusinessIcon from '@material-ui/icons/Business';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Navigation from '@material-ui/icons/Navigation';
import RealTime from '@material-ui/icons/MyLocation';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { connect } from 'react-redux';

class SideBar extends Component {

    render() {
        const { classes, drawer, drawerIsOpen, data } = this.props;

        return (
            <Drawer
                open={drawerIsOpen}
                variant="permanent"
                classes={
                    {
                        paper: classNames(classes.drawerPaper, !drawerIsOpen && classes.drawerPaperClose),
                    }
                }
            >
                <div className={classNames(classes.drawerContent, classes.flex)}>
                  

                    <List className={classes.list} disablePadding>
                        <Link
                            to="/schools"
                            className={classes.listItemLink}
                            onClick={() => setTimeout(() => { drawer.close() }, 300)}>
                            <ListItem
                                button
                                className={classes.listItem}>
                                <ListItemIcon
                                    className={classes.listItem}>
                                    <BusinessIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography={true} primary="Schools" />
                            </ListItem>
                        </Link>
                        <Link
                            to="/kids"
                            className={classes.listItemLink}
                            onClick={() => setTimeout(() => { drawer.close() }, 300)}>
                            <ListItem
                                button
                                className={classes.listItem}>
                                <ListItemIcon
                                    className={classes.listItem}>
                                    <ChildIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography={true} primary="Kids" />
                            </ListItem>
                        </Link>
                        <Link
                            to="/schools/:school_id/tutors"
                            className={classes.listItemLink}
                            onClick={() => setTimeout(() => { drawer.close() }, 300)}>
                            <ListItem
                                button
                                className={classes.listItem}>
                                <ListItemIcon
                                    className={classes.listItem}>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography={true} primary="Tutors" />
                            </ListItem>
                        </Link>
                        <Link
                            to="/bills"
                            className={classes.listItemLink}
                            onClick={() => setTimeout(() => { drawer.close() }, 300)}>
                            <ListItem
                                button
                                className={classes.listItem}>
                                <ListItemIcon
                                    className={classes.listItem}>
                                    <BillIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography={true} primary="Bills" />
                            </ListItem>
                        </Link>
                        <Link
                            to="/routes-list"
                            className={classes.listItemLink}
                            onClick={() => setTimeout(() => { drawer.close() }, 300)}>
                            <ListItem
                                button
                                className={classes.listItem}>
                                <ListItemIcon
                                    className={classes.listItem}>
                                    <Navigation />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography={true} primary="Route Planning" />
                            </ListItem>
                        </Link>
                        <Link
                            to="/real-time"
                            className={classes.listItemLink}
                            onClick={() => setTimeout(() => { drawer.close() }, 300)}>
                            <ListItem
                                button
                                className={classes.listItem}>
                                <ListItemIcon
                                    className={classes.listItem}>
                                    <RealTime />
                                </ListItemIcon>
                                <ListItemText disableTypography={true} primary="Real Time" />
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
        );
    }
}



export default withStyles(styles, { withTheme: true })(SideBar);