import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card} from '@material-ui/core'
import ArticleCard from "./ArticleCard";
import {withStyles} from "@material-ui/core/styles";
import {chooseCategory, pullCategory} from "../redux/actions";
import CustomMenu from "./CustomMultiLevelMenu";
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
        marginTop: theme.spacing(4)
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
    }

    onMenuChosen(chosenTag){
        const {dispatch} = this.props
        dispatch(chooseCategory(chosenTag))
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(pullCategory())
    }

    render() {
        const {contentData, categoryData, chosenTag} = this.props
        const {classes} = this.props;
        return (
            <Grid container className={classes.root} justify={"space-around"} spacing={4}>
                <Grid item xs={10} sm={2}>
                    <Card elevation={2} className={classes.menu}>
                        <CustomMenu content ={categoryData} chosenTag={chosenTag} onTagChosen={this.onMenuChosen}/>
                    </Card>
                </Grid>
                <Grid item xs={10} sm={9} className={classes.articleRoot}>
                    <Grid wrap={'wrap'} container spacing={2} justify={'center'}>
                        {contentData.map((item, i) => (
                            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                                <ArticleCard title={item.title} introduction={item.introduction}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return{
        categoryData: categoryData,
        contentData: contentData,
        //get state from store
        chosenTag: state.ui.chosenCategory
    }

}
export default connect(mapStateToProps)(withStyles(styles)(Content))

