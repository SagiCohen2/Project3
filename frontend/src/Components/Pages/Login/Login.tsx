import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginInfo from '../../../Model/UserInfo';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import notify from '../../Utils/Notyf';
import jwt from 'jsonwebtoken';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
      Sagi Cohen's Vacations Website,This Login page was Made with Material UI.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn(): JSX.Element {
// AXIOS request for check IF USER EXISTS in the database
const findUser = (existsUser: any) => {
  axios
    .post('http://localhost:8080/api/v1/users/login', existsUser)
    .then((response) => {
      // console.log(response.data)
      // Sending the user alert if the data is correct or no. LOGIN OR FAILED
      const userExists = response.data.exists;
      if (userExists === true) {
        notify.success("Logged in successfully");

        setTimeout(() => {
          navigate("/");
        }, 2500); // Delay of 2.5 seconds , just for notify being showed.
      } else {
        notify.error("Failed, Check email and password again.");
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
  const navigate = useNavigate();
const navigateRegister = () => {
  // 👇️ navigate to /
  navigate('/m/Register');
}


const {
  register,handleSubmit,formState: {errors},
} = useForm<LoginInfo>();
const send = (existsUser: LoginInfo) => {
  // console.log(existsUser);
  findUser(existsUser);
  // navigate("/");
}

  return (
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
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(send)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email" ,{required:true})}
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
              {...register("password" ,{required:true})}
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
                <Link href="#" variant="body2" onClick={navigateRegister}>
                  {"Don't have an account? Register Now!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}