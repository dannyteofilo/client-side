import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";

import styles from "./styles";

class SimpleList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <Link to="/home" className={classes.listItemLink}>
            <ListItem button>
              <ListItemIcon>
              <i className="fas fa-pastafarianism"></i>
              </ListItemIcon>
              <ListItemText primary="Pokemon Species" />
            </ListItem>
          </Link>
          <Link to="/pokemons" className={classes.listItemLink}>
            <ListItem button>
              <ListItemIcon>
              <i className="fas fa-bug"></i>
              </ListItemIcon>
              <ListItemText primary="Pokemon" />
            </ListItem>
          </Link>
          <ListItem button onClick={() => this.props.logout()}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
