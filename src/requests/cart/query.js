import gql from 'graphql-tag'

const GET_CART_ID = gql`
    query {
        getCartId{
            id
        }
    }
`;

export default GET_CART_ID
