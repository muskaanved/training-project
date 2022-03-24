import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

export default function Courses() {
  return (
    <>
    <AppBar position="static" margin="1rem">
    
    <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ m: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Top 3 Courses
          </Typography>
       
    </AppBar>
    <Grid container spacing={2} margin="1rem">
      <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="images/maths.png"
        alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Maths
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ENROLL</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="images/enlish.jpg"
        alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          English
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ENROLL</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="images/commerce.jpg"
        alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Accountancy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >ENROLL</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    
        </>
  );
}
