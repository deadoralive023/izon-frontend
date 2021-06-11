import React from 'react'
import { render } from 'react-dom'
import Card from './card'

import { Grid, TextField, Paper, Typography, Button } from '@material-ui/core';

export const PaymentForm = ({state, send}) => {

  function handleChange(e){
    send('UPDATE_CONTEXT', { object: 'cardInfo', key: e.target.name, value: e.target.value})
  }

  const {number, name, valid_thru, cvc } = state.context.cardInfo

  return(
      <Paper>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 Pay your bill
      </Typography>

        <Grid container alignItems="flex-start" spacing={3}>
          <Grid item xs={12}>
            <Card number={number} name={name} expiry={valid_thru} cvc={cvc}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth name="number" value={number} placeholder="Card Number" variant='outlined' onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
              <TextField fullWidth required variant="outlined" name="name" value={name} label="Name" onChange={handleChange}/>
          </Grid>
          <Grid container item xs={12} justify="space-around">
            <Grid item xs={5}>
              <TextField fullWidth required variant="outlined" name="valid_thru" value={valid_thru} label="Valid Thru" onChange={handleChange}/>
            </Grid>
            <Grid item xs={5}>
              <TextField fullWidth required variant="outlined" name="cvc" label="CVC" value={cvc} onChange={handleChange} />
            </Grid>
          </Grid>
          <Grid container item xs={12}  justify="center">
            <Grid item style={{ marginTop: 16 }}>
              <Button type="button" variant="contained" onClick={() => send('RESET_CONTEXT', {object: "cardInfo"})}> Reset </Button>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" type="submit"> Submit </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  )
}



