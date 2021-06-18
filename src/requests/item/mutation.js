import gql from 'graphql-tag'

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

export {
    UPDATE_ITEM_QUANTITY,
    REMOVE_ITEM_FROM_CART
}