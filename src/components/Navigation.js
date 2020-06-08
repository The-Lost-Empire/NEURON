import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AssistantIcon from '@material-ui/icons/Assistant';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   icon: {
     marginRight: theme.spacing(2),
   },
 }));

const Navigation = () => {
   const classes = useStyles();
    return (
       <div>
         <CssBaseline />
         <AppBar position="relative">
         <Toolbar>
            <AssistantIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
               Neuron
            </Typography>
         </Toolbar>
         </AppBar>
       </div>
    );
}
 
export default Navigation;