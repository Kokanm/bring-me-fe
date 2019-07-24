// @flow

import React from 'react';
import { Text } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './relay/environment';
import type { RootQueryResponse } from './__generated__/RootQuery.graphql';

type Props = {
  +error: {
    +message: String,
  },
  +props: RootQueryResponse,
};

const renderInner = ({ error, props }: Props) => {
  if (error) {
    return <Text>{error.message}</Text>;
  } else if (props) {
    return <Text>IT works</Text>;
  }
  return <Text>Loading</Text>;
};

export default function Root() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query RootQuery {
          users {
            id
            firstName
          }
        }
      `}
      render={renderInner}
    />
  );
}
