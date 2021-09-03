import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './area-of-interest.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Ireport
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AreaOfInterest() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className='container'>
      <CssBaseline />
      <div className={classes.paper}>
      <img src='images/ireportlogo.png' alt='IReport' width='100px' />

        <Typography component="h1" variant="h5">
          You have successfully signup
        </Typography><br></br><br></br>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
              <h6>Pick your area of Interest</h6>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Politics"
              /><br></br>
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Business"
              /><br></br>
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Tech"
              /><br></br>
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Sport"
              /><br></br>
              
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Entertainment"
              /><br></br>
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Food"
              /><br></br>
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Health"
              /><br></br>
              <FormControlLabel
                control={<Checkbox value="news choice" color="primary" />}
                label="Thought-and-opinion"
              /><br></br>
            </Grid>
            
            
          </Grid>
          <button className="submit">
            Submit
          </button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Skip
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}