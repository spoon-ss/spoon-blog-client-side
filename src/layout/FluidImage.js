import React from 'react'
import {withStyles} from "@material-ui/core/styles";
import backgroundImg from '../assets/img/background3.jpg'

const styles = (theme) =>({
    fluid:{
        height: '70vh',
        width: '100%',
    },
    backgroundImage:{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    }
})
class FluidImage extends React.Component{
    render() {
        const {classes} = this.props
        return(
            <div className={`${classes.fluid} ${classes.backgroundImage}`}>
            </div>
        )
    }
}

export default withStyles(styles)(FluidImage)
