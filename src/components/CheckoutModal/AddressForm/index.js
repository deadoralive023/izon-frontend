import React, { useState } from 'react';
import useStyles from './styles'
import { Form, Field } from 'react-final-form';
import MuiPhoneNumber from "material-ui-phone-number";
import { ICountry, IState, ICity, csc} from 'country-state-city'


import {
  TextField,
  Select,
  InputLabel,
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';



function reset(){

}

export default function AddresssForm({state, send}) {

  function handleChange(e){
    send('UPDATE_CONTEXT', { object: "addressInfo", key: e.target.name, value: e.target.value})
  }

  function handlePhoneChange(value) {
    send('UPDATE_CONTEXT', { object: "addressInfo", key: "phone", value: value})
  }

  const classes = useStyles();
  const { states, cities, firstName, lastName, email, phone, address, city, countryState} = state.context.addressInfo

  return(
  <Grid>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 Shipping Address
      </Typography>
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={4}>
          <Grid container item xs={12} justify="space-between">
            <Grid item xs={5}>
              <TextField fullWidth variant="outlined" name="firstName" required label="First Name" onChange={handleChange}/>
            </Grid>
            <Grid item xs={5}>  
              <TextField fullWidth variant="outlined" name="lastName"required label="Last Name" onChange={handleChange}/>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="space-between">
            <Grid item xs={5}>
              <TextField fullWidth required variant="outlined" name="email" label="Email" onChange={handleChange}/>
            </Grid>
            <Grid item xs={5}>
              <MuiPhoneNumber fullWidth name="phone" variant="outlined" label="Phone Number" data-cy="user-phone" defaultCountry={"pk"} onChange={handlePhoneChange} />     
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" required name="address" multiline label="Address" onChange={handleChange}/>
          </Grid>
          <Grid container item xs={12} justify="space-between">
            <Grid item xs={5}>
              <InputLabel htmlFor="state">State</InputLabel>
                <Select fullWidth name="countryState" value={countryState} onChange={handleChange} variant="outlined">
                    {
                       states.map((state, i) =>
                        <MenuItem key={i} value={state.isoCode}>{state.name}</MenuItem>
                       )
                    }
                </Select>
             </Grid>
              <Grid item xs={5}>
                <InputLabel htmlFor="city">City</InputLabel>
                  <Select fullWidth name="city" value={city} onChange={handleChange} variant="outlined">
                    {
                       cities.map((city, i) =>
                        <MenuItem key={i} value={city.name}>{city.name}</MenuItem>
                       )
                    }
                  </Select>
              </Grid>
          </Grid>
          <Grid container item xs={12}  justify="space-between">
            <Grid item style={{ marginTop: 16 }}>
              <Button type="button" variant="contained" onClick={reset}> Back to Cart </Button>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" type="submit" onClick={() => send("NEXT")}> Next </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
