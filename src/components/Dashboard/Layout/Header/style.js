import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
background: "white"
    },
    
    searchIcon: {
        opacity: "0.6",
        padding: "0px 8px",
        '& .MuiSvgIcon-root': {
            marginRight: "8px"
        }
    }
});

export default useStyles
