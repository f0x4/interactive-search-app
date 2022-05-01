import {FlatList, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Spacings} from '../../theme/Spacings';

const Autocomplete = () => {
  const data = [1, 2, 3];

  const renderItem = ({item, index}) => (
    <Container>
      <Image source={require('../../../assets/images/c1.png')} />
    </Container>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
    />
  );
};

const Container = styled.View`
  flex-direction: row;
  border-radius: 4px;
  padding: ${Spacings.XSmall};
  background-color: ${Theme};
`;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 4px;
`;

export default Autocomplete;
