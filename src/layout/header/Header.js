import React from 'react'
import CustomizedMenus from "./Dropdown";

import {Avatar, AppBar, Toolbar, Button} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import Typography from '@material-ui/core/Typography';
import ArchiveIcon from '@material-ui/icons/Archive';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
const styles = theme => ({

    avatar:{
        marginRight: theme.spacing(2)
    },
    title:{
        marginRight: theme.spacing(2),
        flexGrow: 0,
    },
    subtitle:{
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(2),
        flexGrow: 0,
    },
    icon:{
     fontSize: "22px"
    },
    button:{
        [theme.breakpoints.down('sm')]:{
            display: "none"
        },
        marginRight:theme.spacing(1),
        textTransform: "none"
    },
    hideButton:{
        [theme.breakpoints.down('sm')]:{
            display: "flex"
        },
        display: 'none',
        backgroundColor: 'transparent'
    },
    grow:{
        flexGrow: 1,
    },

})

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props

        return (
            <AppBar position={"fixed"} color={"transparent"} >
                <Toolbar variant={"regular"} >
                    <Avatar className={classes.avatar} size="small" src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}/>
                    <Typography variant="h5" className={classes.title}>Spoon</Typography>
                    <Typography variant={'subtitle2'} className={classes.subtitle}>My personal blog</Typography>

                    {/* fill the blank in the center */}
                    <div className={classes.grow} > </div>

                    <Button color={'inherit'} className={classes.button}>
                        <HomeIcon className={classes.icon} color="action" />
                        <Typography>Home</Typography>
                    </Button>
                    <Button color={'inherit'} className={classes.button}>
                        <CategoryIcon className={classes.icon} color="action" />
                        <Typography>{"Category"}</Typography>
                    </Button>
                    <Button color={'inherit'} className={classes.button}>
                        <ArchiveIcon className={classes.icon} color="action"  />
                        <Typography>Archive</Typography>
                    </Button>
                    <Button color={'inherit'} className={classes.button}>
                        <PersonIcon className={classes.icon} color="action"  />
                        <Typography>About me</Typography>
                    </Button>
                    <Button color={'inherit'} className={classes.button}>
                        <SearchIcon/>
                    </Button>
                    <div className={classes.hideButton}>
                        <CustomizedMenus/>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }

}

export default withStyles(styles)(Header);
