import {
    AccountCircle,
    NotificationsNone,
    MailOutline,
    Settings,
    Logout
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

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { logout } = useAuth();
    const history = useNavigate()

    const accountSettingClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const accountSettingClose = () => {
        setAnchorEl(null);
    }

    function signOut() {
        logout().then(() => history('/login'));
    }

    return (
        <>
            <div className={classes.contain}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Grid container>
                            <Grid item sm={4}>
                                <InputBase placeholder="search" />
                            </Grid>
                            <Grid item sm={8}>
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
                                    <AccountCircle></AccountCircle>
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
            </div>
        </>
    )
}

export default Header
