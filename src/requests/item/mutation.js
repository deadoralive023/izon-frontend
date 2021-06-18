import gql from 'graphql-tag'

// const UPDATE_ITEM_QUANTITY = gql`
//     mutation AddItemToCart($cart_id: Int, $product_id: Int!, $quantity: Int!){
//         addItemToCart(cart_id: $cart_id, product_id: $product_id, quantity: $quantity){
//             product_id
//             quantity
//         }
//     }
// `;

// const GET_CART = gql`
// query cart($user_id: ID!) {
//   cart(userId: $user_id) {
//       id
//       itemsCount
//       subTotal
//       items {
//         id
//         quantity
//         price
//         product 
//         {
//           name
//           price
//           stock
//           imageUrl
  
//         }
//         productId
//     }
//   }
// }`;

// const CREATE_USER = gql`
//     mutation CreateUser($name: String!, $email: String!)
//     {
//         createUser(input: {name: $name, email: $email}) 
//         {
//             id
//             name
//             email
//             postsCount
//         }
//         errors
//     }
// `;

// mutation changeItemQuantity(input:{ $item_id: ID!, $quantity: Int!}){
const UPDATE_ITEM_QUANTITY = gql`
    mutation ChangeItemQuantity($item_id: ID!, $quantity: Int!)
    {
        changeItemQuantity(input: {itemId: $item_id, quantity: $quantity})
        {
            quantity
        }
    }
`;

const REMOVE_ITEM_FROM_CART = gql`
    mutation RemoveItemFromCart($item_id: ID!)
    {
        removeItemFromCart(input: {itemId: $item_id})
        {
            itemId
        }
    }
`;


// mutation{
//     changeItemQuantity(input: {
//       itemId: 1  
//       quantity:7
//     }){
//       item {
//         id
//         quantity
//         price
//       }
      
//     }
//   }

// export default UPDATE_ITEM_QUANTITY
export {
    UPDATE_ITEM_QUANTITY,
    REMOVE_ITEM_FROM_CART
}