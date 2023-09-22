import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    },
    button: {
        marginTop: '30px',
        // border: '4px red dotted',
        // postion: 'absolute',
        // top: '10px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardContent: {
        flexGrow: '1'
    },
    cardMedia: {
        paddingTop: '56.25%'//16:9
    },
    footer: {
        backgroundColor: 'theme.palette.background.paper',
        padding: '20px 0'
    }
}))

export default useStyles;