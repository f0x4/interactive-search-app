import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import SearchBar from '../components/SearchBar/SearchBar';

const SearchScreen = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundDefault};
`;

export default SearchScreen;
