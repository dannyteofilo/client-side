function styles(theme) {
    return {
        relative: {
            position: 'relative'
        },
        fabContainer: {
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                position: 'unset',
            },
        },
        fabProgressInButton: {
            position: 'absolute',
            zIndex: 1,
        },
        overflowXAuto: {
            overflowX: 'auto'
        },
        fab: {
            left: '100%',
            marginLeft: theme.spacing.unit * -11,
            bottom: theme.spacing.unit * 3,
            position: 'fixed',
        },
        withFab: {
            paddingBottom: theme.spacing.unit * 9
        },
        cursor: {
            cursor: 'pointer'
        }
    }
}

export default styles;