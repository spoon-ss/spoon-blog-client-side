import React from 'react'
import {Grid, List, ListItem, ListItemText, withStyles, Box, Collapse, Typography, Card} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {borderBottom} from "@material-ui/system";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },

    columnBar:{
        marginTop: theme.spacing(4)
    },
    paper:{
        marginTop: theme.spacing(1),
    },
    isChosen: {
        backgroundColor: 'grey',
    }

})
/*
isOn=[
true,
false,
...
]
chosen=[
[false...],[true...],[]
]
allCategoryChosen = true

 */

class SideBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props
        const {cateData, isOn, chosen, allCategoryChosen} = this.props
        const {onCollapsedClick, onChosenClick} = this.props

        return (
            <Grid container direction={'column'}  className={classes.columnBar}>
                <Grid item >
                    <Card>
                        <List className={classes.root}>
                            <ListItem style={ allCategoryChosen ? {backgroundColor: 'rgba(0, 0, 0, 0.1)'} : {}} button onClick={(event) => onChosenClick(-1, -1)}>
                                <Typography  color={"textPrimary"} variant={"subtitle1"}>All</Typography>
                                <Grid item style={{flexGrow: 1}}/>
                            </ListItem>
                            {cateData.map((item, i) => {
                                return (
                                    <FirstMenuItem key={i} classes={classes} handleCollapsedClick={onCollapsedClick} handleChosenClick={onChosenClick}
                                                   isOn={isOn[i]} nextLevelData={item.nextLevelData} chosen={chosen[i]} index={i} title={item.title}/>
                                )
                            })}
                        </List>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

class FirstMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {handleCollapsedClick, handleChosenClick} = this.props
        const {isOn, chosen} = this.props
        const {nextLevelData} = this.props
        const {title, index} = this.props
        const borderStyle = {

        }
        return (
            <div key={index}>
                    <ListItem button onClick={(event) => handleCollapsedClick(index)}>
                        <Typography color={"textPrimary"} variant={"subtitle1"}>{title}</Typography>
                        <Grid item style={{flexGrow: 1}}/>
                        {isOn ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                <SecondMenu classes={this.props} handleChosenClick={(id)=>(handleChosenClick(index, id))} menuData={nextLevelData} isOn={isOn} chosen={chosen}/>
            </div>
        )
    }
}
const theme = createMuiTheme()
const NestedListItem = styled(ListItem)({
    paddingLeft: theme.spacing(4),
    flex: "1, 1, auto"
})

class SecondMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        const {handleChosenClick} = this.props
        const {isOn, chosen} = this.props
        const {menuData} = this.props
        return (
            <Collapse in={isOn} timeout={"auto"} unmountOnExit>
                <List>
                    {menuData.map((subItem, j) => {
                        return (
                            <NestedListItem  style={chosen[j] ? {backgroundColor: 'rgba(0, 0, 0, 0.1)'} : {}} key={j} button onClick={()=>(handleChosenClick(j))}>
                                <Typography  color={"textSecondary"} variant={"subtitle2"}>{subItem}</Typography>
                            </NestedListItem>
                        )
                    })}
                </List>
            </Collapse>
        )
    }
}

export default withStyles(styles)(SideBar)
