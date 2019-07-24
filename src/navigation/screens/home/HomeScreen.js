import React from 'react';
import { Button, Text, Icon } from 'native-base';
import styled from 'styled-components/native';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../../../relay/environment';
import type { RootQueryResponse } from './__generated__/RootQuery.graphql';

type Props = {
  +error: {
    +message: String,
  },
  +props: RootQueryResponse,
};

const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

const BringMeButton = styled(Button)`
  margin-bottom: 20px;
`;

const renderInner = (data: Props) => {
  return (
    <Root>
      <BringMeButton full round iconLeft>
        <Icon name="log-in" />
        <Text>Bring me</Text>
      </BringMeButton>
      <Button full round iconRight>
        <Text>I want to bring</Text>
        <Icon name="log-out" />
      </Button>
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
