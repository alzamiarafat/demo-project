import { createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const theme = createTheme({
    palette: {
        background: {
            default: "#E8F0F8"
        },
        
    }
})

const useStyles = makeStyles({
    contain: {
        paddingLeft: "250px",
        width: "100%"
    },
});

export  {theme}

export default useStyles
