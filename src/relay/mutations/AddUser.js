// @flow

import { graphql, commitMutation } from 'react-relay';
import environment from '../environment';
import type { NewUserInput } from './__generated__/AddUserMutation.graphql';

const mutation = graphql`
  mutation AddUserMutation($newUserData: NewUserInput!) {
    addUser(newUserData: $newUserData) {
      firstName
      lastName
    }
  }
`;

export default function addUser(newUserData: NewUserInput) {
  const variables = {
    newUserData: {
      ...newUserData,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: () => {
      // eslint-disable-next-line no-console
      console.log('Response received from server.');
    },

    onError: err => {
      // eslint-disable-next-line no-console
      console.error(err);
    },
  });
}
