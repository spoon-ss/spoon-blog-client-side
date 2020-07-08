import React, {useState} from "react";
import {List, ListItem, Typography, Collapse} from '@material-ui/core'
import {withRouter} from "react-router";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import {withStyles} from "@material-ui/core/styles";

const styles = (theme) => ({
    chosenBackground:{
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    subMenuMargin:{
        marginLeft: theme.spacing(2)
    },
    itemFontSize:{
        fontSize: '0.8 rem',
    }
})

const MenuItem = withStyles(styles)(withRouter(({content, isSubItem, history, chosenTag, onChosen, classes}) => {
    const [isToggle, setToggle] = useState(false);
    const onClick = ()=>{
        onChosen(content.id);
    }
    return (
        <div >
            <ListItem button className={content.id === chosenTag ? classes.chosenBackground : ""}
                      onClick={content.content.length !== 0 ? () => (setToggle(!isToggle)) : onClick }>
                <Typography className={classes.itemFontSize} color={isSubItem ? "textSecondary" : "textPrimary"} variant={"subtitle1"}>
                    {content.label}
                </Typography>
                {content.content.length !== 0 ? (isToggle ? <ExpandLess/> : <ExpandMore/>) : ""}
            </ListItem>
            {content.content.length !== 0 ?
                <Collapse in={isToggle} timeout={"auto"} unmountOnExit>
                    <List className={classes.subMenuMargin}>
                        {content.content.map((item, i) => {
                            return (<MenuItem key={i} isSubItem={true} content={item} chosenTag={chosenTag} onChosen={onChosen}/>)
                        })}
                    </List>
                </Collapse>
                : ""}
        </div>

    )
}))

const CustomMenu = ({content, onTagChosen, chosenTag = undefined}) => {

    return (
        <List>
            <MenuItem content={{id: -1, label: "All", content:[]}} isSubItem={false} chosenTag={chosenTag} onChosen={onTagChosen}/>
            {content.map((item, i) => (<MenuItem key={i} content={item} isSubItem={false} chosenTag={chosenTag} onChosen={onTagChosen}/>))}
        </List>
    )
}
export default CustomMenu
