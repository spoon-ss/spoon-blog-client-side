import React from 'react'
import {createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

const theme = createMuiTheme();

const styles = (theme) => ({
    root: {
        textAlign: 'initial',
    },
    media: {
        height: 100,
    },
    title:{
        fontSize: '1rem'
    },
    introduction:{
        fontSize: '0.6rem'
    }
})

function ArticleCard(props) {
    const {classes} = props;
    const {title, introduction} = props;

    return (
        <Grid item xs={10} sm={6} md={4} lg={3} justify={'center'} >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography className={classes.title} gutterBottom variant="h2" component="h2">
                                {title}
                            </Typography>
                            <Typography className={classes.introduction} font variant="body2" color="textSecondary" component="p">
                                {introduction}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
    );
}

export default withStyles(styles)(ArticleCard)
