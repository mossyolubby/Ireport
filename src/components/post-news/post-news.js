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
import './post-news.css';
import CustomButton from '../custom-button/custom-button';
import AreaOfInterest from '../Pages/area-of-interest/area-of-interest';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/post">
        Post News
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

export default function PostNews() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src='images/ireportlogo.png' alt='IReport' width='100px' />

        <Typography component="h1" variant="h5">
          Post News
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Title"
                label="Title"
                type="text"
                id="title"
                autoComplete="title"
              />
            </Grid>
            
            <Grid item xs={12} className='select'>
            <select className='areaOfReport'
            id="topics" 
            name="topics"
            type="text"
            required
            label="Area of Report">
            <option className='option' value="">Select Area of Report</option>
            <option className='option' value="politics">Politics</option>
            <option className='option' value="business">Business</option>
            <option className='option'  value="health">Health</option>
            <option className='option'  value="sport">Sport</option>
            <option className='option'  value="tech">Tech</option>
            <option className='option'  value="food">Food</option>
            <option className='option'  value="entertainment">Entertainment</option>
            </select>
            </Grid>
            
            <Grid item xs={12}>
            <textarea className='description'
            rows="4" 
            cols="50"
            fullWidth
            label="Describe your news.."
            placeholder='Describe your news...'
             name="comment">
            </textarea>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="img"
                label="Upload pictures"
                type="file"
                id="img"
                accept="image/*"
              /><h6>JPG,PGN max 2MB</h6>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="video"
                label="Upload Video"
                type="file"
                id="video"
                accept="video/*"
              /><h6>max 30MB</h6>
            </Grid>


            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="This is a geniue news"
              />
            </Grid>
            
          </Grid>
          <Link href = '/area-of-interest'>
          <CustomButton type = 'submit'>
            Post News
          </CustomButton>
          </Link>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Back
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