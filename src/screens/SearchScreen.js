import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchSaver from '../components/SearchSaver/SearchSaver';
import {Spacings} from '../theme/Spacings';

const SearchScreen = () => {
  return (
    <Container>
      <SearchBar />
      <SearchSaver />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundDefault};
`;

export default SearchScreen;
