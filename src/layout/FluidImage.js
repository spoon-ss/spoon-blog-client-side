import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from "@material-ui/core/styles";
import defaultBackgroundImg from '../assets/img/background3.jpg'

const styles = (theme) =>({
    fluid:{
        height: '70vh',
        width: '100%',
    },
    backgroundImage:{
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    }
})
class FluidImage extends React.Component{
    render() {
        const {classes, imgURL=`url(${defaultBackgroundImg})`} = this.props
        return(
            <div style={{backgroundImage: `${imgURL}`}} className={`${classes.fluid} ${classes.backgroundImage}`}>
            </div>
        )
    }
}
FluidImage.propTypes= {
    imgURL: PropTypes.string
}

export default withStyles(styles)(FluidImage)
