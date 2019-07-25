import React from 'react';
import styled from 'styled-components/native';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../../../relay/environment';
// eslint-disable-next-line import/no-unresolved
import type { RootQueryResponse } from './__generated__/RootQuery.graphql';
import FloatingActions from './components/FloatingActions';
import OrdersList from './components/OrdersList';

type Props = {
  +error: {
    +message: String,
  },
  +props: RootQueryResponse,
};

const Root = styled.SafeAreaView`
  flex: 1;
`;

// eslint-disable-next-line no-unused-vars
const renderInner = (data: Props) => {
  return (
    <Root>
      <OrdersList />
      <FloatingActions />
    </Root>
  );
};

export default function HomeScreen() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeScreenQuery {
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
