import { GraphQLError } from 'graphql';

export const gqlErrorHandler = (error: GraphQLError) => {
  return error;
}; 