import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Screen from '../components/Screen/Screen';
import SearchBar from '../components/SearchBar/SearchBar';
import EmptySearchList from '../components/EmptySearchList/EmptySearchList';

const SearchScreen = () => {
  return (
    <Screen>
      <SearchBar />
      <EmptySearchList />
    </Screen>
  );
};

export default SearchScreen;
