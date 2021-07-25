import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DvrIcon from '@material-ui/icons/Dvr';
import Header from './dashboard/header';
import Link from '@material-ui/core/Link'
import Auth from '../components/Auth'
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/clientApp";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#161624',
    color: '#fff',
    borderRight: '4px solid #1d1f31',
  },
  content: {
    flexGrow: 1,
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingRight: '18%',
    paddingLeft: '18%',
    backgroundImage: 'linear-gradient(to top, #161624, #161624, #161724, #171725, #171725, #181827, #181928, #191a2a, #1b1c2d, #1d1e31, #1f2034, #212238)',
    color: '#fff',
    minHeight: '100vh',
  },
  card: {
    backgroundColor: '#171725',
    color: '#fff',
    borderRight: '2px solid #212235',
    borderLeft: '2px solid #212235',
    borderTop: '2px solid #212235',
    borderBottom: '2px solid #212235',
    borderRadius: 16
  }
}));

export default function PermanentDrawerLeft() {
  const [user, loading, error] = useAuthState(firebase.auth())
  const classes = useStyles();

  if (user) {
    return (
      <div className="container">
          {/* <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <Link href="/">Logo</Link>
            <List>
              <ListItem button component="a" href="/dashboard" style={{ backgroundColor: '#6b9fff50', borderRight: '3px solid #6b9fffdc'}}>
                  <ListItemIcon>
                    <DvrIcon style={{ color: '#6b9fff', fontSize: 25, marginLeft: 15 }}/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button component="a" href="/dashboard/inventory">
                  <ListItemIcon>
                    <DvrIcon style={{ color: '#4d5177', fontSize: 25, marginLeft: 15 }}/>
                  </ListItemIcon>
                  <ListItemText primary="Inventory" />
              </ListItem>
              <ListItem button component="a" href="/dashboard/sales">
                  <ListItemIcon>
                    <DvrIcon style={{ color: '#4d5177', fontSize: 25, marginLeft: 15 }}/>
                  </ListItemIcon>
                  <ListItemText primary="Sales" />
              </ListItem>
              <ListItem button component="a" href="/dashboard/expenses">
                  <ListItemIcon>
                    <DvrIcon style={{ color: '#4d5177', fontSize: 25, marginLeft: 15 }}/>
                  </ListItemIcon>
                  <ListItemText primary="Expenses" />
              </ListItem>
              <ListItem button component="a" href="/dashboard/subscriptions">
                  <ListItemIcon>
                    <DvrIcon style={{ color: '#4d5177', fontSize: 25, marginLeft: 15 }}/>
                  </ListItemIcon>
                  <ListItemText primary="Subscriptions" />
              </ListItem>
              <ListItem button component="a" href="/dashboard/bots">
                  <ListItemIcon>
                    <DvrIcon style={{ color: '#4d5177', fontSize: 25, marginLeft: 15 }}/>
                  </ListItemIcon>
                  <ListItemText primary="Bots" />
              </ListItem>
            </List>
          </Drawer> */}
          <main>
            <Header />
            <div className={classes.content}>
              <h1>Hi, Welcome back!</h1>
              <Grid container spacing={3}>
                <Grid item xs={6} lg={3}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3 className="data-card-main">$5000</h3>
                      <h6 className="data-card-desc">Inventory Value</h6>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3 className="data-card-main">37</h3>
                      <h6 className="data-card-desc">Items</h6>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3 className="data-card-main">$1500</h3>
                      <h6 className="data-card-desc">Monthly Sales</h6>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} lg={3}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3 className="data-card-main">$92</h3>
                      <h6 className="data-card-desc">Monthly Expenses</h6>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3>Portfolio</h3>
                      <h6>Display graph</h6>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3>Item type pie graph</h3>
                      <h6>Will display group %</h6>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3>Recently Added</h3>
                      <h6>Item</h6>
                      <h6>Item</h6>
                      <h6>Item</h6>
                      <h6>Item</h6>
                      <h6>Item</h6>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className={classes.card}>
                    <CardContent>
                      <h3>Recently Sold</h3>
                      <h6>Item</h6>
                      <h6>Item</h6>
                      <h6>Item</h6>
                      <h6>Item</h6>
                      <h6>Item</h6>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </main>
        </div>
    )
  }
  else return (
    <>
      <Auth />
    </>
  )
    

}