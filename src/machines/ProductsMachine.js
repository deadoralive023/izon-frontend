import { GET_PRODUCTS }  from '../requests/product/query.js'
import { useQuery } from '@apollo/react-hooks'
import { createMachine, assign } from "xstate";
import client from '../client.js'
import gql from 'graphql-tag'


// Returns a promise. That's all you need!
const machine = createMachine({
    id: "search",
    context: {
      products: null
    },
    initial: "loading",
    states: {
      loading: {
        invoke: {
          id: 'fetchProducts',
          src: 'fetchProducts',
          onDone: {
            target: "success",
            actions: assign({
              products: (_, event) => event.data.data.products
            })
          },
          onError: "error"
        },
      },
      success: {},
      error: {
        on: {
          REFETCH: "loading"
        }
      }
    }
});

const machineConfig = {
  services: {
    fetchProducts:  client.query({ query: GET_PRODUCTS   }),
  }
};

export default createMachine(machine, machineConfig);
