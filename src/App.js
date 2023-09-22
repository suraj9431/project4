import React from 'react'
import { Typography, AppBar, Toolbar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import useStyles from './Style'
const cards = [1, 2, 3, 4, 5, 6, 7, 8,]




const App = () => {
  const classes = useStyles();
  return (
    <>




      <CssBaseline >
        <AppBar position='relative' sx={{}}>
          <Toolbar>
            <PhotoCamera className={classes.icon}></PhotoCamera>
            <Typography variant='h6'>Photo Album </Typography>


          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth='sm' >
              <Typography variant='h3' align='center' color="textPrimary" gutterBottom>Photo Album </Typography>
              <Typography variant='h5' align='center' color='textSecondary'> Hello everyone this is a photo album and im trying to make this sentence as long as possible Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, eius!</Typography>
              <div className={classes.button} >
                <Grid container spacing={2}
                  display={'flex'} justifyContent='center'>
                  <Grid item>
                    <Button
                      variant='contained' color='primary'> See my photos</Button></Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'> See my photos</Button></Grid>
                </Grid>

              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={2}>
              {cards.map(() => (
                <Grid item key={cards} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}
                      image='https://source.unsplash.com/random?wallpapers'
                      title='Image title'>

                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5'>Heading</Typography>
                      <Typography gutterBottom variant='h5'>This is media card.You can use this section to describe the content.</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>View</Button>
                      <Button size='small' color='primary'>Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

            </Grid>

          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant='h6' gutterBottom align='center'>
            footer
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
            somthing here is to give footer a  purpose!
          </Typography>

        </footer>

      </CssBaseline >
    </>
  )
}

export default App



