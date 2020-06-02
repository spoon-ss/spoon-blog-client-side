import React from 'react'
import {Grid, List, ListItem, ListItemText, withStyles, Box, Collapse} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    columnBar: {
        position: 'fixed',
        left: 0,
    },


})

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseBool: props.cateData.reduce((result, item, i) => {
                result[i] = false;
                return result;
            }, {}),
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id, event) {
        let collapseBool = {...this.state.collapseBool}
        collapseBool[id] = !collapseBool[id]
        this.setState({collapseBool});

    }

    render() {
        const {classes} = this.props
        const {cateData} = this.props
        const {collapseBool} = this.state
        return (
            <Grid container direction={'column'} className={classes.columnBar}>
                <Grid item xs={2}>
                    <List className={classes.root}>
                        {cateData.map((item, i) => {
                            return (
                                <FirstMenuItem handleClick={this.handleClick} isOn={collapseBool[i]}
                                               nextLevelData={item.nextLevelData} index={i} title={item.title}/>
                            )
                        })}
                    </List>
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
        const {handleClick} = this.props
        const {isOn} = this.props
        const {nextLevelData} = this.props
        const {title, index} = this.props
        return (
            <Box>
                <ListItem button onClick={(event) => handleClick(index)}>
                    <ListItemText primary={title}/>
                </ListItem>
                <SecondMenuItem menuData={nextLevelData} isOn={isOn}/>
            </Box>
        )
    }
}

const theme = createMuiTheme()
const NestedListItem = styled(ListItem)({
    paddingLeft: theme.spacing(4)
})

class SecondMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isOn} = this.props
        const {menuData} = this.props
        return (
            <Collapse in={isOn} timeout={"auto"} unmountOnExit>
                <List>
                    {menuData.map((subItem, j) => {
                        return (
                            <NestedListItem key={j} button>
                                <ListItemText secondary={subItem}/>
                            </NestedListItem>
                        )
                    })}
                </List>
            </Collapse>
        )
    }
}

export default withStyles(styles)(SideBar)
