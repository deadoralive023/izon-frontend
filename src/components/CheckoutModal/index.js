import React from 'react'

import AddressForm from './AddressForm'
import { PaymentForm } from './PaymentForm'
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles'
import Modal from '@material-ui/core/Modal';
import { useMachine } from '@xstate/react'
import machine from '../../machines/CheckoutMachine'

export const CheckoutModal = () => {
// export const CheckoutModal =  function() {

  const classes = useStyles();

  const [ state, send ] = useMachine(machine)

  return (
    <Modal className={classes.modal} open={true}>
      <Grid style={{ width: '50%', height: '70%' }}>
        <>
        {
          
          state.matches("addressForm") ? 
          <AddressForm state={state} send={send}/> :
          <PaymentForm state={state} send={send}/>
        }
      </>
      </Grid>
    </Modal>
  )
}
