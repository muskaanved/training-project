import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

export default function News() {
  return (
    <>
    <AppBar position="static" margin="1rem" sx={{ bgcolor: "#0a203f", alignItems:"center",margin:"28px 0px" }}>
    
    <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ m: 2, display: { xs: 'none', md: 'flex' }}}
          >
            News
          </Typography>
       
    </AppBar>
    <Grid container spacing={2} >
      <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="images/news1.jpg"
        alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Free Ebooks for all classes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="images/news3.jpg"
        alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Escrow Service Secure your Payment
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="images/news2.jpg"
        alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        24/7 Counceling Service
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small" >Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    
        </>
  );
}
