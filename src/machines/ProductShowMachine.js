import { GET_SHOW_PRODUCT }  from '../requests/product/query.js'
import { useQuery } from '@apollo/react-hooks'
import {  assign, createMachine } from "xstate";
import client from '../client.js'
import gql from 'graphql-tag'


export default createMachine({
    id: "productShowPage",
    context: {
      product: null,
      item_count: 0
    },
    initial: "loading",
    states: {
      loading: {
        invoke: {
          src: 'fetchProduct',
          onDone: {
            target: "idle",
            actions: 'setProduct'
          },
          onError: "error"
        },
      },
      idle: {
        on: {
          INCREMENT_ITEM: {
            src: 'idle',
            actions: 'incrementItem'
          },
          DECREMENT_ITEM: {
            src: 'idle',
            actions: 'decrementItem'
          },
          ADD_TO_CART: {
            invoke: {
              src: 'getCartId',
              onDone:{
                invoke: {
                  src: 'addToCart',
                  onDone: {
                    target: 'addedToCart',
                    action: 'setCartId'
                  },
                  onError: 'error'
                }
              },
              onError: 'error'
            }
          }
        }
      },
      addedToCart: {
          type: 'final',
          action: 'gotToProductsPage'
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
    fetchProduct: (context, event) => {
      return client.query({query: GET_SHOW_PRODUCT, variables: {id: parseInt(context.id)}})
    },
    getCartId: (context, event) => {
      return client.query({query: GET_CART_ID, variables: {id: parseInt(event.usesr_id)}})
    },
    addToCart: (context, event) => {
      return client.query({mutation: ADD_ITEM_TO_CART, variables: {cart_id, id: parseInt(context.id), quantity: parseInt(context.item_count)}})
    }
  },
  actions: {
    incrementItem: assign((context, event) => {
      context.item_count += 1
    }),
    decrementItem: assign((context, event) => {
      context.item_count > 0 ? context.item_count -= 1 : 0
    }),
    setProduct: assign((context, event) => {
      context.product = event.data.data.product
    }),
    setCartId: assign((context, event) => {
      context.cart_id = event.data.data.cart_id
    }),
    gotToProductsPage: assign((context, event) => {
      event.setCurrentPage('ProductsPage')
    })
  }

});
