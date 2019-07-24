import React from 'react';
import { Button, Text, Icon } from 'native-base';
import styled from 'styled-components/native';

const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

const BringMeButton = styled(Button)`
  margin-bottom: 20px;
`;

export default function HomeScreen() {
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
}
