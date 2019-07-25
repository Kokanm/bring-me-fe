// @flow

import React from 'react';
import styled from 'styled-components/native';
import { graphql, QueryRenderer } from 'react-relay';
import { Text } from 'react-native';
import environment from '../../../relay/environment';
import type { HomeScreenQueryResponse } from './__generated__/HomeScreenQuery.graphql';
// eslint-disable-next-line import/no-unresolved
import FloatingActions from './components/FloatingActions';
import DeliveriesList from './components/DeliveriesList';

type Props = {
  error: {
    message: String,
  },
  props: HomeScreenQueryResponse,
};

const Root = styled.SafeAreaView`
  flex: 1;
`;

const renderInner = ({ error, props }: Props) => {
  if (error) {
    return <Text>{error.message}</Text>;
  }
  if (props) {
    return (
      <Root>
        <DeliveriesList deliveries={props} />
        <FloatingActions />
      </Root>
    );
  }
  return <Text>Loading</Text>;
};

export default function HomeScreen() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeScreenQuery {
          ...DeliveriesList_deliveries
        }
      `}
      render={renderInner}
    />
  );
}
