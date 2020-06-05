import React from 'react'
import {Grid, Paper, Slide} from "@material-ui/core";
import {ArticleContentWrap, contentCSSClassName} from "./ArticleContent";
import ArticleIndex from "./ArticleIndex";
import {withStyles} from "@material-ui/core/styles";
import ArticleCard from "../ArticleCard";

const styles = (theme) => ({
    root: {
        textAlign: 'left',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    hide: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
        backgroundColor: 'transparent',
    },
})

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTOCCollapsed: true
        }
    }

    render() {
        const {classes} = this.props
        const {date, content, title, tags} = this.props

        return (
            <Grid container justify={"center"} className={classes.root}>
                <Grid item xs={12} sm={12} md={10} lg={11} xl={11}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={9} xl={9} lg={9}>
                            <Paper elevation={4}>
                                <ArticleContentWrap date={date} content={content} title={title} tags={tags}/>
                            </Paper>
                            <Grid container justify={"space-between"}>
                                <ArticleCard/>
                                <ArticleCard/>
                            </Grid>
                        </Grid>
                        <Grid item md={3} xl={3} lg={3} className={classes.hide} justify={"flex-start"}>
                            <ArticleIndex contentClass={contentCSSClassName} contentStructure={"h1, h2, h3, h4"}/>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Article);
