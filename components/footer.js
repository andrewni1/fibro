import React from 'react';
import Grid from '@material-ui/core/Grid'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-grid">
                    <Grid container spacing={3}>
                        <Grid item xs={8} sm={3}>
                            <h4 className="footer-header">Navigation</h4>
                            <a className="footer-link" href="/">Home</a>
                            <a className="footer-link" href="/">Features</a>
                            <a className="footer-link" href="/">About</a>
                            <a className="footer-link" href="/">FAQ</a>
                        </Grid>
                        <Grid item xs={8} sm={3}>
                            <h4 className="footer-header">Useful Links</h4>
                            <a className="footer-link" href="/dashboard">Dashboard</a>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}