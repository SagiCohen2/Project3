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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoginInfo from '../../../Model/UserInfo';
import axios from 'axios';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import notify from '../../Utils/Notyf'

function Copyright(props: any): JSX.Element {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sagi Cohen's Vacations Website, This Register page was Made with Material UI.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const addNewUser = (newUser: any) => {
    axios
      .post('http://localhost:8080/api/v1/users/Register', newUser)
      .then((response) => {
      })
      .catch((err) => {
        console.error(err)
      })
  }

export default function SignUp(): JSX.Element {
  
  const navigate = useNavigate();
    const navigateLogin = () => {
    // 👇️ navigate to
    navigate('/Login');
    }

const {
    register,handleSubmit,formState: {errors},
} = useForm<LoginInfo>();
const send = (newUser: LoginInfo) => {
    console.log(newUser);
    addNewUser(newUser);
    // navigate("/");
}

  return (
    // REGISTER FORM , Design with MUI. (please install if you don't have it :) 
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(send)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  {...register("fullName",{ required: true , minLength: 4 })}
                />
                {errors.fullName && <span>This field is required.</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email",{ required: true })}
                />
                {errors.email && <span>This field is required.</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password",{ required: true , minLength: 5 })}
                />
                {errors.password && <span>This field is required.</span>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={navigateLogin}>
                  Already have an account? Login now.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    
  );
}