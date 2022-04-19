import {StatusBar} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../theme/Colors';
import Icon from 'react-native-vector-icons/dist/Feather';

const SearchBar = () => {
  return (
    <Wrapper>
      <Container>
        <Icon
          style={{paddingLeft: 15, paddingRight: 10}}
          name="search"
          size={19}
          color={Colors.ligtGrey500}
        />
        <Text>Search...</Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding-top: ${StatusBar.currentHeight + 'px'};
  background-color: ${props => props.theme.statusBarBg};
  opacity: 0.8;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.inputBgDefault};
  margin: 0 16px 8px;
  border-radius: 6px;
  height: 40px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.inputTextDefault};
`;

export default SearchBar;
