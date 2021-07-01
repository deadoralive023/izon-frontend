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

const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!)
    {
        loginUser(input: {email: $email, password: $password})
        {
            user{
                name
                email
            }
            token
        }
    }
`;


// mutation{
//     loginUser(input: {
//       email: "noor@hmail.com",
//       password: "123123"
  
//     }) {
//       user{
//         name
//         email
//       }
//       token
//     }
//   }

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

// export default CREATE_USER
export {
    CREATE_USER,
    LOGIN_USER
}