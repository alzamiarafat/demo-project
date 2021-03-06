import {
    AccountCircle,
    NotificationsNone,
    MailOutline,
    Settings,
    PowerSettingsNew,
    Logout,
    Search
} from '@mui/icons-material';
import {
    AppBar,
    Grid,
    IconButton,
    InputBase,
    ListItemIcon,
    Toolbar,
    MenuItem,
    Menu,
    Badge
} from '@mui/material';
import React from 'react';
import useStyles from './style';
import { useAuth } from '../../../../contexts/Auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../../../redux/authAction';



const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { logout } = useAuth();
    const history = useNavigate();

    const accountSettingClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const accountSettingClose = () => {
        setAnchorEl(null);
    }
    
    const dispatch = useDispatch();

    const signOut = () => {
        logout().then(() => {
            history('/login')
            dispatch(LogoutAction())
        });
    }

    return (
        <>
            <AppBar position="static" color="transparent" style={{background: "white"}}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item>
                            <InputBase placeholder="Search" className={classes.searchIcon} startAdornment={<Search />} />
                        </Grid>
                        <Grid item sm>
                        </Grid>
                        <Grid item>
                            <IconButton title="Notification">
                                <Badge color="error" badgeContent={1}>
                                    <NotificationsNone />
                                </Badge>
                            </IconButton>
                            <IconButton title="Mail">
                                <Badge color="error" badgeContent={4}>
                                    <MailOutline />
                                </Badge>
                            </IconButton>
                            <IconButton title="Accounts" onClick={accountSettingClick}>
                                <PowerSettingsNew />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={accountSettingClose} onClick={accountSettingClose}
                                PaperProps={{
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    Profile
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Settings />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={signOut}>
                                    <ListItemIcon>
                                        <Logout />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
