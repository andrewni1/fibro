import React from "react"
import Grid from '@material-ui/core/Grid'


export default function Home() {
    return(
        <>
            <div className="home-grid">
                <Grid container spacing={3}>
                    <Grid item zeroMinWidth xs={6} sm={3}>
                        <h4 className="home-title">Making inventory tracking simpler and more enjoyable</h4>
                        <a className="home-desc">Update your inventory and track sales with a beautiful, simple to use interface.</a>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}