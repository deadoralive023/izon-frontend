import { createMachine, interpret,  assign, actions } from 'xstate'
import client from '../client.js'
import GET_CATEGORIES from '../requests/category/query.js'

export default () => {
    return  createMachine({
    id: 'navbarMachine',
    context: {
        setCurrentPage: null
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
                context.setCurrentPage('Cart')
            })
        }
    })
}


