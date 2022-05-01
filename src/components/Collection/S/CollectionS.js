import {StyleSheet} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Spacings} from '../../../theme/Spacings';
import {Title} from '../../Typography/AktivGrotesk/Title/Title';
import {Subtitle} from '../../Typography/Montserrat/Subtitle/Subtitle';
import Animated, {FadeIn} from 'react-native-reanimated';
import {FadeInLeft, FadeInRight} from '../../../animations/animations';

const CollectionS = props => {
  return (
    <Wrapper>
      <Container>
        <ImageOne
          as={Animated.View}
          entering={props.left ? FadeInLeft(200) : FadeInRight()}
          style={styles.shadow}>
          <Image source={require('../../../assets/images/c1.png')} />
        </ImageOne>
        <ImageTwo
          as={Animated.View}
          entering={props.left ? FadeInLeft(100) : FadeInRight(100)}
          style={styles.shadow2}>
          <Image source={require('../../../assets/images/c1.png')} />
        </ImageTwo>
        <ImageThree
          as={Animated.View}
          entering={props.left ? FadeInLeft() : FadeInRight(200)}
          style={styles.shadow3}>
          <Image source={require('../../../assets/images/c1.png')} />
        </ImageThree>
      </Container>
      <CentredTitle as={Animated.Text} entering={FadeIn.duration(500)}>
        {props?.title || 'No title'}{' '}
      </CentredTitle>
      <CentredSubtitle as={Animated.Text} entering={FadeIn.duration(500)}>
        Various Artists
      </CentredSubtitle>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 251px;
`;

const Container = styled.View`
  height: 132px;
  margin-bottom: ${Spacings.Small};
`;

const Image = styled.Image`
  width: 126.5px;
  height: 132px;
  border-radius: 4px;
`;

const ImageOne = styled.View`
  position: absolute;
  box-shadow: 8px 0px 24px #000;
  overflow: visible;
  background-color: transparent;
  border-radius: 4px;
`;

const ImageTwo = styled(ImageOne)`
  z-index: -1;
  left: 63.5px;
`;

const ImageThree = styled(ImageOne)`
  z-index: -2;
  left: 126.5px;
`;

const CentredTitle = styled(Title)`
  text-align: center;
  margin-bottom: ${Spacings.XXSmall};
`;

const CentredSubtitle = styled(Subtitle)`
  text-align: center;
`;

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 4,
    backgroundColor: 'transparent',
    shadowColor: 'black',
    elevation: 8,
  },
  shadow2: {
    borderRadius: 0,
    backgroundColor: 'black',
    shadowColor: 'black',
  },
  shadow3: {
    borderRadius: 4,
    backgroundColor: 'black',
    shadowColor: 'black',
    elevation: 8,
  },
});

export default CollectionS;
