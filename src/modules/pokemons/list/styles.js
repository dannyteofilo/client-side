const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  overflowXAuto: {
    overflowX: 'scroll',
    overflowY: 'scroll',
    maxHeight: '80vh',
    minHeight: '40vh'
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  }
});
export default styles;
