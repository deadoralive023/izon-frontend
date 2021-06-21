import { GET_PRODUCTS }  from '../requests/product/query.js'
import { useQuery } from '@apollo/react-hooks'
import { interpret, assign, createMachine } from "xstate";
import client from '../client.js'
import gql from 'graphql-tag'
import productShowMachine from './ProductShowMachine.js' 


export default createMachine({
    id: "productsPage",
    context: {
      products: null
    },
    initial: "loading",
    states: {
      loading: {
        invoke: {
          src: 'fetchProducts',
          onDone: {
            target: "idle",
            actions: 'updateContext'     
          },
          onError: "error"
        },
      },
      idle: {
        on: {
          ITEM_CLICKED: 'productSelected'
        }
      },
      productSelected: {
        type: 'final',
        entry: 'goToProductShowPage'
      },
      error: {
        on: {
          REFETCH: "loading"
        }
      }
    }
}, 
{
  services: {
    fetchProducts:  () => {
      return client.query({ query: GET_PRODUCTS })
    }
  },
  actions: {
    updateContext: assign((context, event) => {
      context.products = event.data.data.products
    }),
    goToProductShowPage: assign((context, event) => {
      event.setCurrentPage('ProductShow')
    })
  }
});
