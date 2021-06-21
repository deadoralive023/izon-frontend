import gql from 'graphql-tag'

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($product_id: ID!)
    {
        addItemToCart(input: {productId: $product_id})
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