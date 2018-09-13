import React, { Component } from "react";
import * as actions from "./redux/actions";
import { connect } from "react-redux";
import Loader from "components/loaders";
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '../details';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';

import Paper from "@material-ui/core/Paper";

import styles from "./styles";


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
class Species extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
      url:''
    }
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleViewSuccess=this.handleViewSuccess.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(actions.fetch());
  }

  handleOpenDialog(url) {
    console.log('Url List: ', url)
    this.setState({
      openDialog: true,
      url:url
    })
  }

  handleViewSuccess() {
    this.setState({
      openDialog: false
    })
  }
  render() {
    const { data, requesting, classes } = this.props;
    const { openDialog,url } = this.state
    console.log("data: ", data);
    return (
      <div>
        {requesting && <Loader />}
        <Paper className={classes.root}>
          <div className={classes.overflowXAuto}>

            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>#</CustomTableCell>
                  <CustomTableCell>Name</CustomTableCell>
                  <CustomTableCell>URL</CustomTableCell>
                  <CustomTableCell>VIEW DETAIL</CustomTableCell>

                </TableRow>
              </TableHead>
              {
                data.pokemon_species && data.pokemon_species.length > 0 &&
                <TableBody>
                  {data.pokemon_species.map((item, index) => {
                    return (
                      <TableRow className={classes.row} key={index}>
                        <TableCell >{index}</TableCell>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell >{item.url}</TableCell>
                        <TableCell className={classes.url}>
                          <IconButton className={classes.button} aria-label="Delete" onClick={() => this.handleOpenDialog(item.url)}>
                            <LinkIcon />
                          </IconButton></TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              }
            </Table>
          </div>

        </Paper>
        {
          openDialog&&
          <Dialog close={this.handleViewSuccess} url={url}/>
        }
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { list } = store.species;
  return {
    data: list.data ? list.data : [],
    requesting: list.requesting
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Species));
