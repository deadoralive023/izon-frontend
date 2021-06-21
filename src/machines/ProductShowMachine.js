import { GET_SHOW_PRODUCT }  from '../requests/product/query.js'
import {  assign, createMachine } from "xstate";
import client from '../client.js'
import ADD_ITEM_TO_CART from '../requests/cart/mutation';


export default (product_id, setCurrentPage) => {
  return createMachine({
      id: 'productShowPage',
      context: {
        id: product_id,
        product: null,
        item_count: 0,
        setCurrentPage: setCurrentPage
      },
      initial: 'loading',
      states: {
        loading: {
          invoke: {
            src: 'fetchProduct',
            onDone: {
              target: 'idle',
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
              target: 'idle',
              actions: 'decrementItem'
            },
            ADD_ITEMS_TO_CART: {
              target: 'addingItemsToCart',
              cond: 'isItemGreaterThanZero'
            },
            UPDATE_CONTEXT: {
              target: 'idle',
              actions: 'updateContext'
            }
          }
        },
        gettingCartId: {
          invoke: {
            src: 'getCartId',
            onDone: {
              target: 'addingItemsToCart'
            },
            onError: {
              target: 'error',
            }
          }
        },
        addingItemsToCart: {
          invoke: {
            src: 'addToCart',
            onDone: {
              target: 'addedToCart',
              actions: 'setCartId'
            },
            onError: {
              target: 'error',
            }
          }
        },
        addedToCart: {
            type: 'final',
            entry: 'gotToProductsPage'
        },
        error: {
          entry:{
            actions: 'print_error'
          }
        }
      }
  }, 
  {
    services: {
      fetchProduct: (context, event) => {
        console.log(context.id)
        return client.query({query: GET_SHOW_PRODUCT, variables: {id: parseInt(context.id)}})
      },
      getCartId: (context, event) => {
        return true
        return client.query({query: GET_CART_ID})
      },
      addToCart: (context, event) => {
        console.log(event.product_id)
        return client.mutate({ mutation: ADD_ITEM_TO_CART, variables: {cart_id: 1, product_id: event.product_id, quantity: context.item_count}})
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
        context.setCurrentPage('Products')
      }),
      print_error: assign((context, event) => {
        console.log(error)
      }),
    },
    guards: {
      isItemGreaterThanZero: (context, _) => {
        return context.item_count > 0
      }
    }

  })
}

