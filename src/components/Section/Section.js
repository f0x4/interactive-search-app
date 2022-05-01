import React from 'react';
import styled from 'styled-components/native';
import H5 from '../Typography/Montserrat/H5/H5';
import {Spacings} from '../../theme/Spacings';
import Animated, {FadeIn} from 'react-native-reanimated';

const Section = props => {
  const title = props.title || 'Lorem Ipsum';

  return (
    <Container>
      <Title as={Animated.Text} entering={FadeIn.duration(500)}>
        {title}
      </Title>
      {props.children}
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: ${Spacings.XXLarge};
`;
const Title = styled(H5)`
  margin: 0 ${Spacings.Medium} ${Spacings.Medium};
`;

export default Section;
