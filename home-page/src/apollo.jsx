import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

// export const client = new ApolloClient({
//   uri: "https://localhost:4000/",
//   cache: new InMemoryCache(),
// });

// export const query = gql`
//   query Profile {
//     firstName
//   }
// `;

// export const getProfile = () => client.readQuery({query})