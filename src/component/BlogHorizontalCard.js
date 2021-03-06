import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover:{
        height: "100%",
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },

}));

export default function BlogHorizontalCard({title, introduction, imgURL, articleURL="/blog/1"}) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <Grid container justify={"space-around"} >
                <Grid item xs={6}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {introduction}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{textTransform: 'none'}} size="small" color="primary" href={articleURL}>
                                Read More
                            </Button>
                        </CardActions>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <CardMedia
                        className={classes.cover}
                        image={imgURL}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}
