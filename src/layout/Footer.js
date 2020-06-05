import React from 'react'
import {Grid, Typography, Paper, Card} from '@material-ui/core'
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        minHeight: '200px',
        background: 'white',
        color: '#7b7b7b',
        fontSize: '0.6rem',
    },
    footerTitle: {
        textAlign: 'left',
        margin: theme.spacing(4),
    },
    subTitle: {
        textAlign: 'left',
        margin: theme.spacing(4),
    },
    footer:{
        marginTop: theme.spacing(4),
    }

})

class Footer extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <footer className={classes.footer}>
                <Card elevation={2}>
                    <Grid container wrap={'unwrap'} className={classes.root}>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Typography align={'left'} variant={"overline"} color={'textPrimary'} component={'div'}
                                            className={classes.subTitle}>
                                    About me
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Typography align={'left'} variant={"overline"} color={'textPrimary'} component={'div'}
                                            className={classes.subTitle}>
                                    Recent blogs
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Typography align={'left'} variant={"overline"} color={'textPrimary'} component={'div'}
                                            className={classes.subTitle}>
                                    Follow me
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={'cation'} component={'div'}>
                                    This site is built by @spoon
                                </Typography>
                                <Typography variant={'cation'} component={'div'}>
                                    This site has <b>1000</b> visitors
                                </Typography>
                            </Grid>
                    </Grid>
            </Card>
            </footer>
        );
    }

}

export default withStyles(styles)(Footer);
