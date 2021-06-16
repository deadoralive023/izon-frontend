import { createMachine, interpret,  assign, actions } from 'xstate'
import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city'

const { send } = actions;

const machine = createMachine({
  id: 'checkoutMachine',
  context: {
    addressInfo: {
      states: csc.getStatesOfCountry('PK'),
      cities:  csc.getCitiesOfState('PK', 'JK'),
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: 'Bhimbar',
      countryState: 'JK'
    },
    cardInfo: {
      number: '', 
      name: '', 
      valid_thru: '', 
      cvc: ''
    }
  },
  initial: 'addressForm',
  states: {
    addressForm: {
      on: {
        UPDATE_CONTEXT: {
          target: 'addressForm',
          actions: 'updateContext'
        },
        NEXT: {
          target: 'paymentForm'
        }
      },
    },
   paymentForm: {
      on: {
        UPDATE_CONTEXT: {
          target: 'paymentForm',
          actions: 'updateContext'
        },
        RESET_CONTEXT: {
          target: 'paymentForm',
          actions: 'resetContext'
        }
      },
    },

  }
}, 
{
  actions: {
    updateContext: assign((context, event) => {
      if(event.key == "countryState"){
        context[event.object].cities = csc.getCitiesOfState('PK', event.value)
        context[event.object].countryState = event.value
        context[event.object].city = context.addressInfo.cities[0].name
      }
      else{
        context[event.object][event.key] = event.value
      }
    }),
    resetContext: assign((context, event) => { 
      Object.keys(context[event.object]).forEach((key, index) => {
        context[event.object][key] = ''
      });
    })
  }
})


export default interpret(machine).start()
