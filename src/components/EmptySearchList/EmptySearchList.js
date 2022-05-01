import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import H3 from '../Typography/Montserrat/H3/H3';
import Body1 from '../Typography/AktivGrotesk/Body1/Body1';
import Section from '../Section/Section';
import Carousel from '../Carousel/Carousel';
import CollectionS from '../Collection/S/CollectionS';
import Animated from 'react-native-reanimated';
import {FadeInDown, FadeOutUp} from '../../animations/animations';

const EmptySearchList = () => {
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <Title
            as={Animated.Text}
            entering={FadeInDown()}
            exiting={FadeOutUp()}>
            What are
          </Title>
          <Title
            as={Animated.Text}
            entering={FadeInDown(50)}
            exiting={FadeOutUp(50)}>
            you looking for?
          </Title>
          <Subtitle
            as={Animated.Text}
            entering={FadeInDown(100)}
            exiting={FadeOutUp(100)}>
            Find your favourite artists, songs, albums or inspiring playlist.
            Just start typing!
          </Subtitle>
        </TextContainer>

        <SectionBottom title="Collections Made for You">
          <Carousel
            data={[1, 2, 3]}
            carouselItem={(item, index) => (
              <CollectionS
                left={index === 0}
                title={'High as Hope ' + (index + 1)}
              />
            )}
            paddingLeft={16}
            itemsGap={16}
          />
        </SectionBottom>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
`;
const TextContainer = styled.View`
  align-self: center;
  max-width: 292px;
  padding-top: 40%;
  padding-bottom: 40%;
`;

const Title = styled(H3)`
  text-align: center;
`;
const Subtitle = styled(Body1)`
  margin-top: 16px;
  text-align: center;
  color: ${props => props.theme.subtitleUnic};
`;
const SectionBottom = styled(Section)`
  padding-top: auto;
`;

export default EmptySearchList;
