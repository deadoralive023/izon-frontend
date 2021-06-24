import React, { useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Category from './Category/index.js'
import  useStyles from './styles'
import machine from '../../machines/CategoriesMachine.js'
import { useMachine } from '@xstate/react'

  
export const Categories = () => {
  const classes = useStyles();
  const [ state, send ] = useMachine(machine)
  const { categories } = state.context
  

  return (
    state.matches('idle') ?
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {
            categories.map((category) => (
            <Grid key={category.id} item>
              <Category data={category} send={send} />
            </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid> :
    <h1>Loading...</h1>
  )
}
  





