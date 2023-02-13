import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' allign="center" color="textSecondary" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        Add new photo
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        See all photos
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.gridGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                        Heading
                                    </Typography>
                                    <Typography gutterBottom variant='h5'>
                                        This is a media card. You can use this section to describe the content
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Viev</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Contacts
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Konstantin Verema prod.
                </Typography>
            </footer>
        </>
    );
}

export default App;