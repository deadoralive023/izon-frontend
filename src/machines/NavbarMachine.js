import { createMachine, interpret,  assign, actions } from 'xstate'
import client from '../client.js'
import GET_CATEGORIES from '../requests/category/query.js'

export default (setContext) => {
    return  createMachine({
    id: 'navbarMachine',
    context: {
        setContext: setContext
    },
    initial: 'idle',
    states: {
        idle: {
        on: {
            CART_CLICKED: {
                actions: 'goToCart'
            }
        }
        },
    },
    },
    {
        actions: {
            goToCart: assign((context, event) => { 
                context.setContext((prev) =>  { 
                    return {...prev, currentPage: 'Cart' }
                  })
            })
        }
    })
}


