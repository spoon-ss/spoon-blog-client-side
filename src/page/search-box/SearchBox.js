import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import SearchBoxAction from "../../redux/search-box/actions";
import BlogHorizontalCard from "../../component/BlogHorizontalCard";
import {getSearchKeyword, getSearchResult} from "../../redux/search-box/selectors";
import {connect} from "react-redux";
const testData= [
    {
        id : 1,
        title: "test title",
        introduction: "test introduction"

    },
    {
        id : 1,
        title: "another test title",
        introduction: "another test introduction"
    }
]
const style = (theme) => ({
    dialog: {
        height: '70%'
    },
    searchInput:{
        marginBottom: theme.spacing(2)
    }
})

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.onKeywordChange = this.onKeywordChange.bind(this);
    }

    componentWillUnmount() {
        const {dispatch} = this.props
        dispatch(SearchBoxAction.searchBoxExit())
    }


    onKeywordChange(event){
        const {dispatch} = this.props
        dispatch(SearchBoxAction.searchBoxChange(event.target.value))
    }

    render() {
        const {open, onClose, blogInfo = testData} = this.props
        const {classes} = this.props

        return (
            <div>
                <Dialog
                    open={open}
                    onClose={onClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                    scroll={"paper"}
                    maxWidth={'md'}>
                    <DialogTitle id="form-dialog-title">Search Blogs</DialogTitle>
                    <DialogContent>
                        <div className={classes.searchInput}>
                            <TextField
                                autoFocus
                                variant={"outlined"}
                                color={"primary"}
                                margin="dense"
                                id="name"
                                label="Keyword"
                                fullWidth
                                onChange={this.onKeywordChange}
                            />
                        </div>

                        <div style={{minHeight: "400px"}}>
                            <Grid container spacing={2}>
                                {blogInfo.map((item, i) => (
                                    <Grid key={i} item xs={12} >
                                        <BlogHorizontalCard
                                            title={item.title}
                                            introduction={item.introduction}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(store){
    return{
        blogInfo: getSearchResult(store),
        keyword: getSearchKeyword(store)
    }
}
export default connect(mapStateToProps)(withStyles(style)(SearchBox))
