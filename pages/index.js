import React from "react"
import Grid from '@material-ui/core/Grid'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Home() {
    return(
        <>
            <Navbar />
            <div className="home-grid">
                <Grid container spacing={3}>
                    <Grid item zeroMinWidth xs={6} sm={3}>
                        <h4 className="home-title">Inventory management made simpler and more enjoyable</h4>
                        <a className="home-desc">Track inventory and sales with a beautiful, simple to use interface.</a>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    )
}