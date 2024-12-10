import * as dotenv from 'dotenv';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  TestGetUserByIdDocument,
  TestGetUserByIdQuery,
  TestGetUserByIdQueryVariables,
} from './src/generated/graphql';

dotenv.config();

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET as string,
  },
  cache: new InMemoryCache(),
});

client
  .query<TestGetUserByIdQuery, TestGetUserByIdQueryVariables>({
    query: TestGetUserByIdDocument,
    variables: {
      id: 1,
    },
  })
  .then((result) => console.dir(result.data, { depth: null }));
