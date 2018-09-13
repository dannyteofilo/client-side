import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import classNames from 'classnames';


const styles = {
  root: {
    flexGrow: 1,
  },
  linerProgressFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: '9999'
},
linerProgressAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: '9999'
},
};

function LinearIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" className={ classNames(classes.linerProgressFixed, classes.linerProgressAbsolute) } />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);
