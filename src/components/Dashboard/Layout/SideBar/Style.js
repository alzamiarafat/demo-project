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
        padding: "100px 10px 100px 10px",
    },
    item: {
        color: "black",
        padding: "15px",
        '&:hover': {
            color: "white"
        }
    }
});

export default useStyles
