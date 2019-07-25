// @flow

import { graphql, commitMutation } from 'react-relay';
import environment from '../environment';
import { NewDeliveryInput } from './__generated__/AddDeliveryMutation.graphql';

const mutation = graphql`
  mutation AddDeliveryMutation($newDeliveryData: NewDeliveryInput!) {
    addDelivery(newDeliveryData: $newDeliveryData) {
      item
      imageURL
      description
      locationTo
      locationFrom
      deliverBy
      type
    }
  }
`;

export const addDelivery = (newDeliveryData: NewDeliveryInput) => {
  const variables = {
    newUserData: {
      ...newDeliveryData,
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
};
