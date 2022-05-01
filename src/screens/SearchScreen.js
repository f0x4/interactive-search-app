import {Pressable, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import Screen from '../components/Screen/Screen';
import SearchBar from '../components/SearchBar/SearchBar';
import EmptySearchList from '../components/EmptySearchList/EmptySearchList';
import {useSelector} from 'react-redux';
import {isEmpty} from '../redux/slices/searchSlice';
import Animated, {FadeIn} from 'react-native-reanimated';

const SearchScreen = () => {
  const isSearchEmpty = useSelector(isEmpty);
  console.log(isSearchEmpty);

  return (
    <Screen>
      <SearchBar />
      {isSearchEmpty && <EmptySearchList as={Animated.View} />}
    </Screen>
  );
};

export default SearchScreen;
