import gql from 'graphql-tag'

const GET_PRODUCTS = gql`
    query{
        products{
            id
            name
            price
            imageUrl
        }
    }
`;

export default GET_PRODUCTS
