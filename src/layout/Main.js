import React from 'react'
import {Grid} from '@material-ui/core'
import {withStyles} from "@material-ui/core/styles";


const styles = (theme)=>({

})
class Main extends React.Component{
    render(){
        const {classes}=this.props
        return(
            <main>
                <Grid container justify={'center'} >

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
