import React from 'react'
import { Grid} from '@material-ui/core';
import Details  from './components/Details/Details';
import {useSpeechContext } from "@speechly/react-client";
import Button from '@material-ui/core/Button';


import Main from './components/Main/Main';

import useStyles from './styles';


const App = () => {
    const classes = useStyles();

   
  
    const { listening, attachMicrophone, start, stop } = useSpeechContext();
    const handleClick = async () => {
      if (listening) {
        await stop();
      } else {
        await attachMicrophone();
        await start();
      }
    };
    
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        
        <Grid item xs={12} sm={4} className={classes.mobile} >
          <Details title="Income" />
        </Grid>

        <Grid  item xs={12} sm={3} className={classes.main}>
          <Main/>
        </Grid>
       
        <Grid item xs={12} sm={4} className={classes.desktop} >
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.last} >
          <Details title="Expense" />
        </Grid>
        <div className="App">

      <Button size="large" variant="contained" style={{left:'3vh',bottom:'12vh',right:'93vh'}} onClick={handleClick}>
       
        {listening ? 'Stop' : 'Start'} microphone
      </Button>
     
      
      
     

       </div>
    </Grid>



    </div>
  )
}

export default App;