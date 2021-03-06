import React from 'react'
import CustomizedMenus from "./Dropdown";

import {Avatar, AppBar, Toolbar, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import Typography from '@material-ui/core/Typography';
import ArchiveIcon from '@material-ui/icons/Archive';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import {withRouter, Link} from "react-router-dom";
import SearchBox from "../../page/search-box/SearchBox";

const styles = theme => ({
    toolbarHeight:{
        height: '100px'
    },
    appBar: {
        height: '100px',
        display: 'flex',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        color:'black',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)

    },
    avatar: {
        marginRight: theme.spacing(2)
    },
    title: {
        marginRight: theme.spacing(2),
        flexGrow: 0,
    },
    subtitle: {
        lineHeight: '1.5',
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(2),
        flexGrow: 0,
    },
    icon: {
        fontSize: "22px"
    },
    button: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
        marginRight: theme.spacing(1),
        textTransform: "none"
    },
    hideButton: {
        [theme.breakpoints.down('sm')]: {
            display: "flex"
        },
        display: 'none',
        backgroundColor: 'transparent'
    },
    grow: {
        flexGrow: 1,
    },

})

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBoxOpen: false
        }
        this.handleSearchBoxOpen = this.handleSearchBoxOpen.bind(this)
        this.handleSearchBoxClose = this.handleSearchBoxClose.bind(this)
    }


    handleSearchBoxOpen(){
        this.setState({searchBoxOpen: true})
    }
    handleSearchBoxClose(){
        this.setState({searchBoxOpen: false})
    }


    render() {
        const {classes, history} = this.props
        const {searchBoxOpen} = this.state

        return (

            <div className={classes.toolbarHeight}>
                <AppBar position={'relative'} className={classes.appBar}>
                        <Avatar className={classes.avatar} size="small"
                                src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}/>
                        <Typography variant="h4" className={classes.title}>Spoon</Typography>
                        <Typography variant={'overline'} className={classes.subtitle}>My personal blog</Typography>

                        {/* fill the blank in the center */}
                        <div className={classes.grow}></div>

                        <Button color={'inherit'} onClick={()=>(history.push("/"))} className={classes.button}>
                            <HomeIcon className={classes.icon} color="action"/>
                            <Link to={"/"}>
                            </Link>
                            <Typography variant={'button'}>Home</Typography>
                        </Button>
                        <Button color={'inherit'} className={classes.button}>
                            <CategoryIcon className={classes.icon} color="action"/>
                            <Typography variant={'button'}>Category</Typography>
                        </Button>
                        <Button color={'inherit'} onClick={() =>(history.push("/archive"))} className={classes.button}>
                            <ArchiveIcon className={classes.icon} color="action"/>
                            <Typography variant={'button'}>Archive</Typography>
                        </Button>
                        <Button color={'inherit'} className={classes.button}>
                            <PersonIcon className={classes.icon} color="action"/>
                            <Typography variant={'button'}>About me</Typography>
                        </Button>
                        <Button color={'inherit'} className={classes.button}  onClick={this.handleSearchBoxOpen} >
                            <SearchIcon/>
                        </Button>
                        <div className={classes.hideButton}>
                            <CustomizedMenus />
                        </div>
                        <div>
                            <SearchBox open={searchBoxOpen} onClose={this.handleSearchBoxClose}/>
                        </div>
                </AppBar>
            </div>
        )
    }

}

export default withStyles(styles)(withRouter(Header));

