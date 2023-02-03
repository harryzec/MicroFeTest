import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://localhost:4000/",
  cache: new InMemoryCache(),
});

const query = gql`
  query ProfileInformation {
    firstName
    lastName
    favoriteColor
  }
`;

export const getProfile = () => client.readQuery({ query });

export const mutateProfileInformation = async ({
  firstName,
  lastName,
  favoriteColor,
}) => {
  await client.writeQuery({
    query,
    data: {
      firstName,
      lastName,
      favoriteColor,
    },
  });

  return;
};
