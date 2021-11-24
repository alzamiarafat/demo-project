import { makeStyles } from '@material-ui/styles';
import { color } from '@mui/system';

const useStyles = makeStyles({
    sideBar: {
        display: "flex",
        background: "gray", 
        width: "250px", 
        height: "100%", 
        position: "absolute", 
        textAlign: "center", 
        flexDirection: "column", 
        left: "0px",
    },
    contain: {
        paddingLeft: "250px",
        width: "100%"

    }
});

export default useStyles
