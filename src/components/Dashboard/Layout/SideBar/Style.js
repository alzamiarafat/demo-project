import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    sideBar: {
        display: "flex",
        background: "skyblue", 
        width: "250px", 
        height: "100%", 
        position: "absolute", 
        textAlign: "center", 
        flexDirection: "column", 
        left: "0px"
    },
    contain: {
        paddingLeft: "250px",
        width: "100%"

    }
});

export default useStyles
