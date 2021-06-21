import React from 'react'
import AddressForm from './AddressForm'
import { PaymentForm } from './PaymentForm'
import { useStyles } from './styles'
import Modal from '@material-ui/core/Modal';
import { useService } from '@xstate/react'
import machine from '../../machines/CheckoutMachine'
import { inspect } from '@xstate/inspect'



export default function CheckoutModal() {


  const classes = useStyles();

  const [ state, send ] = useService(machine, {devTools: true})

  return (
    <Modal className={classes.modal} open={true}>
      <>
      {
        state.matches("addressForm") ? 
        <AddressForm state={state} send={send}/> :
        <PaymentForm state={state} send={send}/>
      }
      </>
    </Modal>
    )
}
