import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Context } from '../../Context';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

const defaultTheme = createTheme();
const Header = () => {
    const { loggedInUser } = React.useContext(Context);
    const { updateLoggedInUser } = React.useContext(Context);
    return (
        <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Blog Site
          </Typography>
          {!loggedInUser ? (
            
            <Button
            variant="contained"
            color="primary"
            sx={{ ml: 'auto' }}
            href="/signin"
          >
            Login
          </Button>
          ) : (<>
            <Typography variant="h6" color="inherit" noWrap sx={{ ml: 'auto' }}>
                Welcome {loggedInUser}!
            </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 'auto' }}
            onClick={() => {
                if (window.confirm('Are you sure you want to logout?')){
                    updateLoggedInUser(null);
                }
            }}
          >
            Logout
          </Button>
          </>
          )}
        </Toolbar>
        </AppBar>
        </ThemeProvider>

    );
};

export default Header;


