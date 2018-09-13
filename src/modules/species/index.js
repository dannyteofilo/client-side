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
  }
  componentDidMount() {
    this.props.dispatch(actions.fetch());
  }
  render() {
    const { data, requesting, classes } = this.props;
    console.log("data: ", data);
    return (
      <div style={{overflow:'scroll', maxHeight:'80vh'}}>
        {requesting && <Loader />}
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell numeric>URL</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.pokemon_species.map((item,index) => {
                return (
                  <TableRow className={classes.row} key={index}>
                    <CustomTableCell component="th" scope="row">
                      {item.name}
                    </CustomTableCell>
                    <CustomTableCell numeric>{item.url}</CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { species } = store;
  return {
    data: species.data ? species.data : [],
    requesting: species.requesting
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Species));
