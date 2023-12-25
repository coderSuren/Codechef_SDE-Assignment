import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BlogSection from '../blog/Blog';
import { Context } from '../../Context';
import Header from '../header/Header';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.surendran.info/" target="_blank">
        Surendran G N
      </Link>{' '}
      

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  const { loggedInUser } = React.useContext(Context);
  const navigate = useNavigate();


  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Blog
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We share our best ideas in our blog
            </Typography>

            {!loggedInUser ? (
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={() => navigate('/signup')}>Create New Account</Button>
              <Button variant="outlined" onClick={() => navigate('/signin')}>Login as Existing User</Button>
            </Stack>
            ) : (<> </>) }
          </Container>
        </Box>
        <BlogSection></BlogSection>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thank you for visiting my blog!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
