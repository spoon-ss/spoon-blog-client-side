import React from 'react'
import {Grid} from '@material-ui/core'
import ArticleCard from "./ArticleCard";
import {withStyles} from "@material-ui/core/styles";
import SideBar from "./SideBar";

const styles = (theme) =>({
    articleRoot:{
        marginTop: theme.spacing(4)
    },
    root:{
        minHeight: '500px',
    }
})
class Content extends React.Component{
    render() {
        const {classes} = this.props;
        const {contentData} = this.props
        const {cateData} = this.props
        return(
            <Grid container className={classes.root}>
                <SideBar cateData={cateData}/>
                <Grid wrap={'wrap'} container xs={12} sm={9} spacing={2} justify={'center'} className={classes.articleRoot}>
                    {contentData.map((item, i) => (
                        <ArticleCard title={item.title} introduction={item.introduction}/>
                    ))}
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Content)
