import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../component/header';
import Footer from '../component/footer';
import { useToasts } from 'react-toast-notifications';
import { useRouter } from 'next/router';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {
    const { addToast } = useToasts();
    const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const va = {
       email: data.get('email'),
       password: data.get('password'),
     };
    fetch(`http://94.237.3.78:4000/api/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(va),
    }) .then((response) => {response.json().then((res) => {
     
        if(res.message == "user name not found"){
          addToast('Invalid Email & Password', { appearance: 'error' ,autoDismiss: true});
        }else if(res.message === "password is incorrect"){
          addToast('password is incorrect', { appearance: 'error' ,autoDismiss: true});
        }else if(res.role[0].roleType == "admin"){
          addToast('you loggedIn as an admin', { appearance: 'error' ,autoDismiss: true});
        }else{
        localStorage.setItem("token", res.token);
        localStorage.setItem("firstName", res.firstName);
        localStorage.setItem("id", res._id);
        localStorage.getItem("token");
        addToast('Login Successfully', { appearance: 'success' ,autoDismiss: true});
        router.push({ pathname: '/'});
        }
    })  
  })
    .catch((error) => {
      console.error("Error:", error);
    });
  };
  

  return (
      <>
      <Header/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="../signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
    <Footer/>
    </>
  );
}



