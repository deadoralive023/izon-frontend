import { createMachine, interpret,  assign, actions } from 'xstate'
import client from '../client.js'
import GET_CATEGORIES from '../requests/category/query.js'

export default createMachine({
  id: 'categoriesMachine',
  context: {
    categories: null
  },
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        src: 'fetchCategories',
        onDone: {
          target: 'idle',
          actions: 'updateContext'
        },
        onError: 'error'
      }
    },
    idle: {
      on: {
        CATEGORY_SELECTED: 'categorySelected'
      }
    },
    categorySelected: {
      type: 'final',
      entry: 'goToProductsPage'
    },
    error: {}
  }
  }, 
{
  services: {
    fetchCategories:  () => {
      return client.query({ query: GET_CATEGORIES })
    }
  },

  actions: {
    goToProductsPage: assign((_, event) => {
      event.setContext((prev) =>  { 
         return {...prev, currentPage: "Products" }
      })
    }),
    updateContext: assign((context, event) => {
      context.categories = event.data.data.categories
    })
  }
})


