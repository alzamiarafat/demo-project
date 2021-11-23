import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { AppBar, Grid, IconButton, InputBase, InputLabel, TextField, Toolbar } from '@mui/material';
import { Badge } from 'antd';
import React from 'react';
import useStyles from './style';

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.contain}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Grid container>
                            <Grid item sm={4}>
                                <InputBase placeholder="search" />
                            </Grid>
                            <Grid item sm={8}>
                                <IconButton>
                                    <Badge color="secondary" badgeContent={100}>
                                        <NotificationsNoneIcon></NotificationsNoneIcon>
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge color="secondary" badgeContent={100}>
                                        <MailOutlineIcon></MailOutlineIcon>
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge color="secondary" badgeContent={100}>
                                        <PowerSettingsNewIcon></PowerSettingsNewIcon>
                                    </Badge>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Header
