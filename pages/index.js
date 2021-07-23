import React from "react"
import Grid from '@material-ui/core/Grid'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

export default function Home() {
    return(
        <>
            <div className="home">
                <Navbar />
                <div className="home-grid">
                    <Grid container spacing={3}>
                        <Grid item zeroMinWidth xs={6} sm={3}>
                            <h4 className="home-title">Inventory management made simpler and more enjoyable</h4>
                            <a className="home-desc">Track inventory and sales with a beautiful, simple to use interface.</a>
                            <br />
                            <Button href="/login" color='#6B9FFF'
                                style={{ 
                                    textTransform: 'none',
                                    color: '#6B9FFF',
                                    fontSize: 16,
                                    variant: 'outlined',
                                    border: '1px solid #6B9FFF',
                                    marginTop: 30
                                }}>
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid>
                            <Paper variant="outlined">
                                <img src="https://www.visme.co/wp-content/themes/visme/images/type-of-graphs-visme.png" />
                            </Paper>
                        </Grid>
                    </Grid>
                    <div className="feature-one">
                        <Grid container spacing={3}>
                            <Grid item zeroMinWidth xs={6} sm={3}>
                                <a className="feature-number">FEATURE</a>
                                <br />
                                <a></a>
                                <br />
                                <a className="feature-title">Database Storage</a>
                                <br />
                                <a></a>
                                <br />
                                <a className="feature-desc">With the use of database, all your entries will be saved for the next time you log in.</a>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="feature-two">
                        <Grid container spacing={3}>
                            <Grid item zeroMinWidth xs={6} sm={3}>
                                <a className="feature-number">FEATURE</a>
                                <br />
                                <a></a>
                                <br />
                                <a className="feature-title">Database Storage</a>
                                <br />
                                <a></a>
                                <br />
                                <a className="feature-desc">With the use of database, all your entries will be saved for the next time you log in.</a>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}