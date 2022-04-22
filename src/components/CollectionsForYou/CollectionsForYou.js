import {FlatList} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import H5 from '../Typography/Montserrat/H5/H5';
import {Spacings} from '../../theme/Spacings';
import CollectionS from '../Collection/S/CollectionS';

const data = [0, 1];

const renderItem = () => <CollectionS />;

const CollectionsForYou = () => {
  return (
    <Container>
      <Title>Collections Made for You</Title>

      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={renderItem}
      />
    </Container>
  );
};

const Container = styled.View``;
const Title = styled(H5)`
  box-shadow: 8px 0px 24px #fff;
  margin: 0 ${Spacings.Medium} ${Spacings.Medium};
`;

export default CollectionsForYou;
