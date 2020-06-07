import React from 'react'
import {Grid} from '@material-ui/core'
import {withStyles} from "@material-ui/core/styles";
import FluidImage from "./FluidImage";
import backgroundImg from "../assets/img/background3.jpg";


const styles = (theme)=>({

})
class Main extends React.Component{
    render(){
        const {classes}=this.props
        return(
            <main>
                <Grid container justify={'center'} >

                    <FluidImage imgURL={`url(${backgroundImg})`}/>
                    {this.props.children}
                    {/*
                <Content/>
                <Footer/> */}
                </Grid>
            </main>

        )
    }
}
export default withStyles(styles)(Main)
