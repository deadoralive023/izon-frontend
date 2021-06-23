import { GET_PRODUCTS }  from '../requests/product/query.js'
import { assign, createMachine } from "xstate";
import client from '../client.js'
import ADD_ITEM_TO_CART from '../requests/cart/mutation';
import { useMutation } from '@apollo/react-hooks';


export default createMachine({
    id: "productsPage",
    context: {
      products: null
    },
    initial: 'loading',
    states: {
      loading: {
        invoke: {
          src: 'fetchProducts',
          onDone: {
            target: 'idle',
            actions: 'updateContext'     
          },
          onError: 'error'
        },
      },
      idle: {
        on: {
          ITEM_CLICKED: 'productSelected',
          ADD_ITEM_TO_CART: 'addingItemtoCart'
        }
      },
      addingItemtoCart: {
        invoke: {
          src: 'addingItemTocart',
          onDone: {
            target: 'idle'
          },
          onError: {
            target: 'error',
            actions: ['printError']
          }

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
      console.log('fetching products....')
      return client.query({ query: GET_PRODUCTS })
    },
    addingItemTocart: (_, event) => {
      return client.mutate({ mutation: ADD_ITEM_TO_CART, variables: {cart_id: 1, product_id: event.product_id, quantity: 1}})
    }
  },
  actions: {
    updateContext: assign((context, event) => {
      context.products = event.data.data.products
    }),
    goToProductShowPage: assign((context, event) => {
      event.setContext((prev) =>  { 
        return {...prev, currentPage: 'ProductShow' }
      })
    }),
    printError: assign((context, event) => {
      console.log('error')
    })
  }
});
