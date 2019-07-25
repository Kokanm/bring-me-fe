// @flow

import { graphql, commitMutation } from 'react-relay';
import environment from '../environment';
import { NewUserInput } from './__generated__/AddUserMutation.graphql';

const mutation = graphql`
  mutation AddUserMutation($newUserData: NewUserInput!) {
    addUser(newUserData: $newUserData) {
      firstName
      lastName
    }
  }
`;

export const addUser = (newUserData: NewUserInput) => {
  const variables = {
    newUserData: {
      ...newUserData,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    onError: err => console.error(err),
  });
};
