import React from 'react'
import {createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImg from '../assets/img/cardImg.jpg'
import {withRouter} from "react-router";

const theme = createMuiTheme();

const styles = (theme) => ({
    root: {
        textAlign: 'initial',
        minWidth: '250px',
    },
    media: {
        minHeight: '150px',
        backgroundSize: '100%',
    },
    title:{
        fontSize: '1rem'
    },
    introduction:{
        fontSize: '0.6rem'
    },
    cardContent:{
        height: "100px",
        overflow: "hidden"
    }

})

class ArticleCard extends React.Component{
    render() {
        const {classes} = this.props;
        const {title, introduction, imgURL=`${cardImg}`, articleURL='/blog/1'} = this.props;
        const {history} = this.props
        return (
            <div className={this.props.className}>

                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={`${imgURL}`}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.title} gutterBottom variant="h2" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.introduction} variant="body2" color="textSecondary" component="p">
                            {introduction}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={{textTransform: 'none'}} size="small" color="primary" onClick={(e)=>{
                            history.push(articleURL);
                        }}>
                            Read More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }

}

export default withStyles(styles)(withRouter(ArticleCard))
