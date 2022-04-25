import React from 'react';
import styled from 'styled-components/native';
import H3 from '../Typography/Montserrat/H3/H3';
import Body1 from '../Typography/AktivGrotesk/Body1/Body1';
import Section from '../Section/Section';
import Carousel from '../Carousel/Carousel';
import CollectionS from '../Collection/S/CollectionS';

const EmptySearchList = () => {
  return (
    <Container>
      <TextContainer>
        <Title>What are you looking for?</Title>
        <Subtitle>
          Find your favourite artists, songs, albums or inspiring playlist. Just
          start typing!
        </Subtitle>
      </TextContainer>

      <Section title="Collections Made for You">
        <Carousel
          data={[1, 2, 3]}
          carouselItem={item => <CollectionS x={'High as Hope ' + item} />}
          paddingLeft={16}
          itemsGap={16}
        />
      </Section>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  overflow: hidden;
`;
const TextContainer = styled.View`
  align-self: center;
  max-width: 292px;
  margin-top: 45%;
  margin-bottom: auto;
`;

const Title = styled(H3)`
  text-align: center;
  margin-bottom: 16px;
`;
const Subtitle = styled(Body1)`
  text-align: center;
  color: ${props => props.theme.subtitleUnic};
`;

export default EmptySearchList;
