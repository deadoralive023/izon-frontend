import { gql } from '@apollo/client';

const GET_CART = gql`
query cart($user_id: ID!) {
  cart(userId: $user_id) {
      id
      itemsCount
      subTotal
      items {
        id
        quantity
        price
        product 
        {
          name
          price
          stock
          imageUrl
  
        }
        productId
    }
  }
}`;

export default { GET_CART }

