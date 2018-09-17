import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import *as actions from './redux/actions';
import image from "../../../detail.jpg";


import { connect } from 'react-redux';


const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 180,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class PokemonDetails extends React.Component {
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
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={data!==null ? data.sprites.back_default :''}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                {
                                    data !== null &&
                                    <div>
                                        <Typography variant="subheading" color="inherit" className={classes.flex}>
                                            Name: {data.name}
                                        </Typography>
                                        <Typography variant="subheading" color="inherit" className={classes.flex}>
                                            Height: {data.height}
                                        </Typography>
                                        <Typography variant="subheading" color="inherit" className={classes.flex}>
                                            Location: {data.location_area_encounters}
                                        </Typography>
                                        <Typography variant="subheading" color="inherit" className={classes.flex}>
                                            Abilities: {data.abilities[0] ? data.abilities[0].ability.name : ''} {data.abilities[1] ? data.abilities[1].ability.name : ''}
                                        </Typography>
                                    </div>
                                }
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {
                                !requesting &&
                                < Button size="small" onClick={this.handleClose} color="secondary">
                                    Close
                                </Button>
                            }
                            {
                                requesting &&
                                <CircularProgress className={classes.progress} color="secondary" />
                            }
                        </CardActions>
                    </Card>
                </Dialog>
            </div >
        );
    }
}

const mapStateToProps = store => {
    console.log(store)
    const { details } = store.pokemons;
    return {
        data: details.data ? details.data : null,
        requesting: details.requesting
    }
}

// export default DetailSpecies;

export default connect(mapStateToProps)(withStyles(styles)(PokemonDetails))
