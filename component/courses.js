import React,{useEffect,useState} from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';



const Courses = () => {
  const [course, setCourse] = useState([]);
  
  useEffect(()=>{
    fetch('http://94.237.3.78:4000/api/get_course').then((a)=>{
      return a.json();
    })
    .then((data)=>{
      setCourse(data)
    })
  },[])
  return (

        <>
    <AppBar position="static" margin="1rem" sx={{ bgcolor: "#0a203f" ,alignItems:"center" ,margin:"28px 0px"}}>
    <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ m: 2, display: { xs: 'none', md: 'flex' } }}
            >
            Latest 3 Courses
          </Typography>
       
    </AppBar>
    <Grid container spacing={2}>
        {course.slice(0, 3).map((item,i)=>{
          return(
      <Grid item xs={4} key={i}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image={"http://94.237.3.78/demo_beta/"+item.Image}
        alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {item.author}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price - {item.cost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" href={
          localStorage.getItem("token")?
          "":"../login"} sx={{width:"100%",bgcolor: "#e42a00"}}>ENROLL</Button>
      </CardActions>
    </Card>
    </Grid>
    )})}
    </Grid>
   
        </>
  );
}


export default Courses