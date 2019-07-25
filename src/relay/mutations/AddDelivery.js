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
  return new Promise(function(resolve, reject) {
    const variables = {
      newDeliveryData: {
        ...newDeliveryData,
      },
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: () => resolve(),
      onError: () => reject(),
    });
  });
};
