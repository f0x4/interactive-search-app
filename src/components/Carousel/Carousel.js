import {FlatList, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';

const Carousel = props => {
  const data = props.data || [];
  const CarouselItem = props.carouselItem;
  const itemsGap = props.itemsGap || 0;
  const paddingLeft = props.paddingLeft || 0;

  const [itemWidth, setItemWidth] = useState(0);

  const {width: windowWidth} = useWindowDimensions();

  const onLayout = event => {
    const {width: itemWidth} = event.nativeEvent.layout;
    setItemWidth(itemWidth);
  };

  const renderItem = ({item, index}) => (
    <Container onLayout={onLayout} itemsGap={itemsGap}>
      {CarouselItem(item, index)}
    </Container>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index}
      contentContainerStyle={{
        paddingLeft: paddingLeft || 0,
        paddingRight: windowWidth - itemWidth - paddingLeft,
      }}
      horizontal
      pagingEnabled
      snapToInterval={itemWidth}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
    />
  );
};

const Container = styled.View`
  padding-right: ${props => props.itemsGap + 'px'};
`;

export default Carousel;
