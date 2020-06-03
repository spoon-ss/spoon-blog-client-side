import React from 'react'
import {Grid, List, ListItem, ListItemText, withStyles, Box, Collapse, Typography, Card} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },

    columnBar:{
        padding: theme.spacing(4),
    },
    paper:{
        marginTop: theme.spacing(1),
    }
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

            <Grid container xs={11} sm={3} direction={'column'} alignItems={'initial'} className={classes.columnBar}>
                <Grid item >
                    <Card>
                        <List className={classes.root}>
                            {cateData.map((item, i) => {
                                return (
                                    <FirstMenuItem handleClick={this.handleClick} isOn={collapseBool[i]}
                                                   nextLevelData={item.nextLevelData} index={i} title={item.title}/>
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
        const {handleClick} = this.props
        const {isOn} = this.props
        const {nextLevelData} = this.props
        const {title, index} = this.props
        return (
            <Box>
                <ListItem button onClick={(event) => handleClick(index)}>
                    <Typography color={"textPrimary"} variant={"subtitle1"}>{title}</Typography>
                </ListItem>
                <SecondMenuItem menuData={nextLevelData} isOn={isOn}/>
            </Box>
        )
    }
}

const theme = createMuiTheme()
const NestedListItem = styled(ListItem)({
    paddingLeft: theme.spacing(4),
    flex: "1, 1, auto"
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
                                <Typography color={"textSecondary"} variant={"subtitle2"}>{subItem}</Typography>
                            </NestedListItem>
                        )
                    })}
                </List>
            </Collapse>
        )
    }
}

export default withStyles(styles)(SideBar)
