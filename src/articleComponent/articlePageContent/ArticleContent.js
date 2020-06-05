import React from 'react'
import {Grid} from '@material-ui/core'
import {Typography} from "@material-ui/core";
import {withStyles, useTheme} from "@material-ui/core/styles";
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
})



const contentCSSClassName = 'js-toc-content'
class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {classes} = this.props
        const {content} = this.props

        return (
               <div className={`${contentCSSClassName} markdown-body`}>
                   <Markdown options={options} >{content}</Markdown>
                   {/*<Typography id={1} variant={"h1"} component={'h1'}>
                       This is an introduction to Spring MVC framework
                   </Typography>*/}
                </div>
        );
    }
}
const ArticleContentWrap = withStyles(styles)(ArticleContent)
export {ArticleContentWrap, contentCSSClassName}

