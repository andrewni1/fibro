import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DvrIcon from '@material-ui/icons/Dvr';
import Header from './header';
import InventoryTable from './inventoryTable'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <h1>Logo</h1>
        <List>
          <ListItem button component="a" href="/dashboard">
              <ListItemIcon>
                <DvrIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component="a" href="/dashboard/inventory">
              <ListItemIcon>
                <DvrIcon />
              </ListItemIcon>
              <ListItemText primary="Inventory" />
          </ListItem>
          <ListItem button component="a" href="/dashboard/sales">
              <ListItemIcon>
                <DvrIcon />
              </ListItemIcon>
              <ListItemText primary="Sales" />
          </ListItem>
          <ListItem button component="a" href="/dashboard/expenses">
              <ListItemIcon>
                <DvrIcon />
              </ListItemIcon>
              <ListItemText primary="Expenses" />
          </ListItem>
          <ListItem button component="a" href="/dashboard/subscriptions">
              <ListItemIcon>
                <DvrIcon />
              </ListItemIcon>
              <ListItemText primary="Subscriptions" />
          </ListItem>
          <ListItem button component="a" href="/dashboard/bots">
              <ListItemIcon>
                <DvrIcon />
              </ListItemIcon>
              <ListItemText primary="Bots" />
          </ListItem>
        </List>
      </Drawer>
      <main anchor="right"className={classes.content}>
        <Header anchor="right"/>
        <InventoryTable />
      </main>
    </div>
  );
}
