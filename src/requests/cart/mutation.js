import gql from 'graphql-tag'

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($cart_id: Int!, $product_id: ID!, $quantity: Int!)
    {
        addItemToCart(input: {cartId: $cart_id, productId: $product_id, quantity: $quantity})
        {
            item{
                id
                quantity
                price
                product{
                  name 
                  
                }
            }
        }
    }
`;

// mutation{
//     addItemToCart(input: {
//       productId: 6  
  
//     }) {
//       item{
//         id
//         quantity
//         price
//         product{
//           name 
          
//         }
//       }
//     }
//   }

// const REMOVE_ITEM_FROM_CART = gql`
//     mutation RemoveItemFromCart($item_id: ID!)
//     {
//         removeItemFromCart(input: {itemId: $item_id})
//         {
//             itemId
//         }
//     }
// `;

export default ADD_ITEM_TO_CART
// export {
//     ADD_ITEM_TO_CART
// }