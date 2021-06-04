import gql from 'graphql-tag'

const GET_PRODUCTS = gql`
    query{
        products{
            id
            name
            stock
            price
            imageUrl
        }
    }
`;

export default GET_PRODUCTS
