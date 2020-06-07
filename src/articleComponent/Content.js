import React from 'react'
import {Grid} from '@material-ui/core'
import ArticleCard from "./ArticleCard";
import {withStyles} from "@material-ui/core/styles";
import SideBar from "./SideBar";

const categoryData = [
    {
        title: "Algorithm",
        nextLevelData: ["BFS", "DFS", "LinkedList"]
    },
    {
        title: "Backend",
        nextLevelData: ["Java", "Spring", "Distributed System"]
    }
]
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
    root: {
        minHeight: '500px',
    }
})

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentData: contentData,
            isOn: categoryData.map((item) => (false)),
            chosen: categoryData.map((item,) => {
                return item.nextLevelData.map((subItem, j) => (false));
            }),
            allCategoryChosen: true

        }
        this.handleChosenClick = this.handleChosenClick.bind(this);
        this.handleCollapsedClick = this.handleCollapsedClick.bind(this);
    }

    handleCollapsedClick(id) {
        this.setState({
            isOn: this.state.isOn.map((item, i) => {
                if (id === i) {
                    return !item
                }
                return item
            })
        })
    }

    handleChosenClick(firstLevel, secondLevel) {

        if (firstLevel !== -1 && secondLevel !== -1) {
            this.setState({
                chosen: this.state.chosen.map((item, i) => {
                    let result = item.map((subItem) => (false));
                    if (i === firstLevel) {
                        result[secondLevel] = true;
                    }
                    return result;
                }),
                allCategoryChosen: false
            })
        } else {
            this.setState({
                chosen: this.state.chosen.map((item, i) => {
                    return item.map((subItem) => (false))
                }),
                allCategoryChosen: true,
            }
        )}
    }


    render() {
        const {classes} = this.props;
        const {isOn, chosen, allCategoryChosen} = this.state
        return (
            <Grid container className={classes.root} justify={"space-around"} spacing={4}>
                <Grid item xs={10} sm={2}>
                    <SideBar cateData={categoryData} isOn={isOn} chosen={chosen} allCategoryChosen={allCategoryChosen}
                             onCollapsedClick={this.handleCollapsedClick} onChosenClick={this.handleChosenClick}/>
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

export default withStyles(styles)(Content)
