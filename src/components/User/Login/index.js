import React, { useContext, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {LOGIN_USER} from '../../../requests/user/mutation'
import { useMutation } from '@apollo/react-hooks'

import { UserContext } from '../../../context/UserContext';
import localforage from "localforage";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Openshop
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbiUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginForm = () => {

  const classes = useStyles();

  const { user, setUser } = useContext(UserContext);
  // console.log("User In Login Component: ", user);
  // console.log("UserContext In Login Component: ", UserContext);

  const [loginUser, { data, client }] = useMutation(LOGIN_USER);

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputPasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const storeData = async (data) => {

    console.log("In Login, storing Data : ", data.user.email);
    console.log("Local Forage : ",localforage);

    setUser(data.user);

    try {
      await localforage.setItem("@user-login-token", data.token);
      await localforage.setItem("@current_user", data.user);

    } catch (e) {
      console.log("Local Storage Error");
    }
  };

  const login = async (event) => {
    event.preventDefault();

    const loggedin_user = await loginUser({
        variables: { email: inputEmail, password: inputPassword }
      }); 
    console.log("Email In Login Component: ", inputEmail);
    console.log("Password In Login Component: ", inputPassword);

    // console.log("In Login, after Mutation: ", .data.loginUser.user.name);
    storeData(loggedin_user.data.loginUser);
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus

              value={inputEmail}
              onChange = {handleInputEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

              value={inputPassword}
              onChange = {handleInputPasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={login}
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}