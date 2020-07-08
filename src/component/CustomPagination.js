import React, {useState} from 'react'
import Pagination from "@material-ui/lab/Pagination"
import {withStyles} from "@material-ui/core/styles";
const styles = (theme) =>({
    root:{
        justify: 'center'
    }
})
const CustomPagination = function ({page, totalPage, onPageChanged, classes}) {

    const onChange = (event, value)=>{
        event.preventDefault()
        onPageChanged(value)
    }
    return(
        <div>
            <Pagination className={classes.root} color={"primary"} count={totalPage} page={page} onChange={onChange}/>
        </div>
    )

}
export default withStyles(styles)(CustomPagination)
