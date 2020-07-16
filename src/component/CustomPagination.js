import React, {useState} from 'react'
import Pagination from "@material-ui/lab/Pagination"
import {withStyles, makeStyles} from "@material-ui/core/styles";
const useStyle = makeStyles((theme) =>({
    root:{
        marginTop: theme.spacing(4),
    }
}))
const CustomPagination = function ({page, totalPage, onPageChanged}) {

    const onChange = (event, value)=>{
        event.preventDefault()
        onPageChanged(value)
    }
    const classes = useStyle()
    return(
        <div className={classes.root}>
            <Pagination className={classes.root} color={"primary"} count={totalPage} page={page} onChange={onChange}/>
        </div>
    )

}
export default CustomPagination
