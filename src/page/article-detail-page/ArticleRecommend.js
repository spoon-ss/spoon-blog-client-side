import React from 'react'
import {Card, Grid, Typography} from '@material-ui/core'
import ArticleCard from "../../component/ArticleCard";
import {withStyles} from "@material-ui/core/styles";

const styles = (theme) => ({
    root: {
        overflowX: 'scroll',
        overflowY: 'visible',
    },
    flexItem: {
        flex: '1 1 auto'
    },
    header:{
        margin: theme.spacing(2)
    }
})

class ArticleRecommend extends React.Component {
    render() {
        const {classes} = this.props
        const {content} = this.props
        return (
            <div>
                    <Typography className={classes.header} variant={'overline'} component={'h5'}>
                        Also on <b>Spoon' Blog</b>
                    </Typography>
                    <Grid container wrap={"nowrap"} className={classes.root} spacing={2}>
                        {content.map((item, i) => (
                            <Grid item key={i}>
                                    <ArticleCard className={classes.flexItem} title={item.title}
                                                 introduction={item.introduction}
                                                 imgURL={item.introductionImgURL} articleURL={`/blog/${item.id}`}/>
                            </Grid>
                        ))}
                    </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ArticleRecommend)
