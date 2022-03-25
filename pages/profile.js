import React,{useEffect,useState} from 'react'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../component/header';
import Footer from '../component/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const theme = createTheme();
const id = localStorage.getItem("id");

export default function Profile() {
 
    const [profile, setProfile] = useState([]);
    useEffect(()=>{
      fetch('http://94.237.3.78:4000/api/user_Detail/'+id).then((a)=>{
        return a.json();
      })
      .then((data)=>{
        setProfile(data)
      })
    },[])
    console.log(profile.firstName,"eee")
  return (
      <>
      <Header/>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiyHYtDJQ0t5jCs4j_PiD5ESMvPwnvHVa3w&usqp=CAU">
             
            </Avatar>
            <Typography component="h1" variant="h5">
            Your Profile
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
            <Card sx={{ maxWidth: 345 , margin: "18px 0px"}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/news2.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                   Contact Name:  <Typography gutterBottom variant="body2" component="span">{profile.firstName } {profile.lastName}</Typography>
                </Typography>
                <Typography variant="body1" component="div">
                    Contact No:  <Typography gutterBottom variant="body2" component="span">{profile.phone }</Typography>
                </Typography>
                <Typography variant="body1" component="div">
                    Email:  <Typography gutterBottom variant="body2" component="span">{profile.email }</Typography>
                </Typography>
                </CardContent>
                <IconButton aria-label="Edit">
                <EditIcon/>
            </IconButton>
            </CardActionArea>
            </Card>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Your Profile
              </Button> */}
              
            </Box> 
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

    <Footer/>
    </>
  );
}