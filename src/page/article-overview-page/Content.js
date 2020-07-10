import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card} from '@material-ui/core'
import ArticleCard from "../../component/ArticleCard";
import {withStyles} from "@material-ui/core/styles";
import CustomMenu from "../../component/CustomMultiLevelMenu";
import CustomPagination from "../../component/CustomPagination";
import {
    blogInfoSelector, getBlogInfos, getChosenTag, getPage,
    totalPageSelector,
    unFlattenCategoryTreeSelector
} from "../../redux/blog-overview-page/selector";
import {BlogOverviewPageAction} from "../../redux/blog-overview-page/action";
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

const getArticleURL = (id)=>{
    return `/blog/${id}`
}
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
        dispatch(BlogOverviewPageAction.changeChosenCategory(newTag))
    }
    onPageChosen(newPage){
        const{dispatch, chosenPage, chosenTag} = this.props
        if(chosenPage === newPage){
            return
        }
        dispatch(BlogOverviewPageAction.changeChosenPage(newPage))
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(BlogOverviewPageAction.loadPage())
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
                                    <ArticleCard imgURL={item.introductionImgURL} articleURL={getArticleURL(item.id)}
                                                 title={item.title} introduction={item.introduction}/>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container justify={'center'}>
                            <CustomPagination onPageChanged={this.onPageChosen} totalPage={totalPage} page={chosenPage} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
function mapStateToProps(state) {

    return{
        categoryData: unFlattenCategoryTreeSelector(state),
        contentData: blogInfoSelector(state),
        //get state from store
        chosenTag: getChosenTag(state),
        chosenPage: getPage(state),
        totalPage: totalPageSelector(state)
    }

}
export default connect(mapStateToProps)(withStyles(styles)(Content))

