import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

import *as actions from './redux/actions';

import { connect } from 'react-redux';
import { Divider } from '../../../../node_modules/@material-ui/core';


const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    content_detail: {
        display: 'flex',
        width: '500px',
        height: '300px',
        margin: '30px',
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class DetailSpecies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
        }
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillMount() {
        const { url } = this.props
        this.props.dispatch(actions.fetch(url))
    }

    handleClickOpen(url) {
        console.log('url : ', url)
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
        this.props.close();
    };


    render() {
        const { data, classes } = this.props
        const { requesting } = this.props
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Details
                            </Typography>
                            {
                                requesting &&
                                <CircularProgress className={classes.progress} color="secondary" />

                            }
                        </Toolbar>
                    </AppBar>
                    <DialogContent className={classes.content_detail}>
                        {
                            data &&
                            <div>
                                <Typography variant="subheading" color="inherit" className={classes.flex}>
                                    Habitat: {data.habitat.name}
                                </Typography>
                                <Typography variant="subheading" color="inherit" className={classes.flex}>
                                    Color: {data.color.name}
                                </Typography>
                                <Typography variant="subheading" color="inherit" className={classes.flex}>
                                    Shape: {data.shape.name}
                                </Typography>
                                <Typography variant="subheading" color="inherit" className={classes.flex}>
                                    Generation: {data.generation.name}
                                </Typography>
                            </div>
                        }
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            OK
                        </Button>
                    </DialogActions>

                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store)
    const { details } = store.species;
    return {
        data: details.data ? details.data : [],
        requesting: details.requesting
    }
}

// export default DetailSpecies;

export default connect(mapStateToProps)(withStyles(styles)(DetailSpecies))
