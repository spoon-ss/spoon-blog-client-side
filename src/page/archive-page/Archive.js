import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import {ArchiveAction} from "../../redux/archive-page/action";
import {selectSortedBlogInfo} from "../../redux/archive-page/selector";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import ArticleCard from "../../component/ArticleCard";
import {Helmet} from "react-helmet";
const styles = (theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
})

class Archive extends React.Component {


    componentDidMount() {
        const {dispatch} = this.props
        dispatch(ArchiveAction.loadArchive())
    }

    render() {
        const {classes} = this.props
        const {content} = this.props
        return (
            <Grid container justify={"center"}>
                <Helmet>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                          rel="stylesheet"/>
                </Helmet>
                <Timeline align="alternate">

                    {content.map((item, i) => (
                        <TimelineItem key={i}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    {new Date(item.publishDate).toDateString()}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={"primary"}>
                                    <b>{`${content.length - i}th`}</b>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid container justify={i % 2 === 0 ? "flex-start" : "flex-end"}>
                                    <Grid item xs={5}>
                                        <ArticleCard title={item.title}
                                                     introduction={item.introduction}
                                                     imgURL={item.introductionImgURL} articleURL={`/blog/${item.id}`}/>
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Grid>
        );
    }
}

function mapStateToProps(state) {

    const content = selectSortedBlogInfo(state)
    console.log("Archive page loaded")
    console.log(content)
    return {
        content: content
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Archive))
