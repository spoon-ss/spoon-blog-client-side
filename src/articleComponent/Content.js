import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card} from '@material-ui/core'
import ArticleCard from "./ArticleCard";
import {withStyles} from "@material-ui/core/styles";
import {pullBlogInfoList, pullCategory} from "../redux/actions";
import CustomMenu from "./CustomMultiLevelMenu";
import CustomPagination from "./CustomPagination";
const chosenTag = "Label of Item"
const categoryData =[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        to: '#a-link',
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
        ],
    },
];

const contentData = [
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
    {
        title: "Introduction to React",
        introduction: "This article teach the basic concept about React."
    },
]
const styles = (theme) => ({
    articleRoot: {
        marginTop: theme.spacing(4),
        minHeight: '500px',
    },
    menu:{
        marginTop: theme.spacing(4)
    },
    root: {
        minHeight: '500px',
    }
})

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.onMenuChosen = this.onMenuChosen.bind(this)
        this.onPageChosen = this.onPageChosen.bind(this)
    }

    onMenuChosen(newTag){
        const {dispatch, chosenTag} = this.props
        if(chosenTag === newTag){
            return
        }
        dispatch(pullBlogInfoList(newTag, 1))
    }
    onPageChosen(newPage){
        const{dispatch, chosenPage, chosenTag} = this.props
        if(chosenPage === newPage){
            return
        }
        dispatch(pullBlogInfoList(chosenTag, newPage))
    }

    componentDidMount() {
        const {dispatch, chosenTag, chosenPage} = this.props
        dispatch(pullCategory())
        dispatch(pullBlogInfoList(chosenTag, chosenPage))
    }

    render() {
        const {contentData, categoryData, chosenTag} = this.props
        const {chosenPage, totalPage} = this.props
        const {classes} = this.props;
        console.log(this.props.store)
        return (
            <Grid container className={classes.root} justify={"space-around"} alignContent={"space-between"} >
                <Grid item xs={10} sm={2}>
                    <Card elevation={2} className={classes.menu}>
                        <CustomMenu content ={categoryData} chosenTag={chosenTag} onTagChosen={this.onMenuChosen}/>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={9}   >
                    <Grid container className={classes.articleRoot} alignContent={"space-between"}>
                        <Grid container spacing={2}>
                            {contentData.map((item, i) => (
                                <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                                    <ArticleCard imgURL={item.introImgHref} articleURL={item.selfHref}
                                                 title={item.title} introduction={item.introduction}/>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container justify={'center'}>
                            <CustomPagination onPageChanged={this.onPageChosen} totalPage={totalPage} page={chosenPage}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
function mapStateToProps(state) {

    return{
        categoryData: state.blog_info.category.content,
        contentData: state.blog_info.content,
        //get state from store
        chosenTag: state.blog_info.metadata.current_category,
        chosenPage: state.blog_info.metadata.current_page,
        totalPage: state.blog_info.metadata.total_page
    }

}
export default connect(mapStateToProps)(withStyles(styles)(Content))

