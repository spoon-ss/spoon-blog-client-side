import React from 'react'
import {withStyles, useTheme} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import "./ArticleIndex.css";
import Markdown from 'markdown-to-jsx';
import {options} from './MarkdownOptions'
import 'github-markdown-css'
import './ArticleContent.css'


const styles = (theme) => ({
    root:{
    },
    p:{
        margin: theme.spacing(2)
    },
    postDate: {
        color: "#7b7b7b",
        textTransform: "uppercase",
        fontSize: "1em",
        marginTop: theme.spacing(4),
    },
    introductionSection: {
        fontStyle: 'italic',
        marginTop: theme.spacing(4),
    },
    horizontalLine:{
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    }
})



const contentCSSClassName = 'js-toc-content'
class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {classes} = this.props
        const {title, content, introduction} = this.props

        return (

            <div>
            <Grid container justify={"center"}>
                <time className={classes.postDate} dateTime={"2015-05-06T19:23:38+00:00"}>MAY 6, 2015</time>
                <Grid item xs={12}>
                    <Typography variant={'h3'} align={"center"} component={'h3'}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.introductionSection} variant={'body1'} align={"center"} paragraph component={'p'}>
                        {introduction}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <hr className={classes.horizontalLine}/>
                </Grid>
            </Grid>
                {/* to disable the default css, delete "markdown-body" keyword */}
               <div className={`${contentCSSClassName} markdown-body`}>
                   <Markdown options={options} >{content}</Markdown>
                   {/*<Typography id={1} variant={"h1"} component={'h1'}>
                       This is an introduction to Spring MVC framework
                   </Typography>*/}
                </div>
            </div>
        );
    }
}
const ArticleContentWrap = withStyles(styles)(ArticleContent)
export {ArticleContentWrap, contentCSSClassName}

