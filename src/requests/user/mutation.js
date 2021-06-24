import gql from 'graphql-tag'

const CREATE_USER = gql`
    mutation CreateUser($email: String!, $name: String!, $password: String!)
    {
        createUser(input: {email: $email, name: $name, password: $password})
        {
            user{
                name
                email
            }
        }
    }
`;
// mutation{
//     createUser(input: {
//       email: "noor@hmail.com",
//       name: "noor",
//       password: "123123"
  
//     }) {
//       user{
//         name
//         email
//       }
//     }
//   }


export default CREATE_USER
// export {
//     ADD_ITEM_TO_CART
// }