import gql from 'graphql-tag'

const GET_CATEGORIES = gql`
    query {
        categories{
            id
            name
            imageUrl
        }
    }
`;

export default GET_CATEGORIES
