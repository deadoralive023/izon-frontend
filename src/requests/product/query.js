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


const GET_SHOW_PRODUCT = gql`
    query{
        products{
            id
            name
            price
            description
            imageUrl
        }
    }
`;

export {
    GET_PRODUCTS,
    GET_SHOW_PRODUCT
}
