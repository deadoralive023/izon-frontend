import { gql } from '@apollo/client';

export default gql`
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

