import gql from 'graphql-tag'

const ADD_NEW_ITEM_TO_CART = gql`
    mutation AddItemToCart($cart_id: Int, $product_id: Int!, $quantity: Int!){
        addItemToCart(cart_id: $cart_id, product_id: $product_id, quantity: $quantity){
            product_id
            quantity
        }
    }
`;
