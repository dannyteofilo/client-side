const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width:'250px',
        height:'300px',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'column'
      },
    container: {
        width: '100%',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage: URL('../../fondo.jpg')
    },
    box_login:{
        backgroundColor:'#90CAF9',
        width:'250px',
        height:'300px'
    }
})
export default styles;