import {StatusBar} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/Feather';
import {Spacings} from '../../theme/Spacings';
import {useTheme} from 'styled-components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {setIsEmpty} from '../../redux/slices/searchSlice';

const SearchBar = props => {
  const theme = useTheme();
  const [text, onChangeText] = React.useState('');
  const searchInput = useRef(null);

  const dispatch = useDispatch();

  const translateUpDown = useSharedValue(0);
  const opacityUpDown = useSharedValue(1);

  const shiftUpDownAnim = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateUpDown.value}],
      opacity: opacityUpDown.value,
    };
  });

  const shiftDownPlaceholder = () => {
    translateUpDown.value = withTiming(80);
    opacityUpDown.value = withTiming(0);
  };
  const shiftUpPlaceholder = () => {
    translateUpDown.value = withTiming(0);
    opacityUpDown.value = withTiming(1);
  };

  const onPressSearch = () => {
    dispatch(setIsEmpty());
    shiftDownPlaceholder();
    searchInput.current.focus();
  };
  const onEndEditingSearch = () => {
    searchInput.current.blur();
    shiftUpPlaceholder();
  };
  const onSubmitEditing = () => {
    dispatch(setIsEmpty());
    searchInput.current.blur();
    shiftUpPlaceholder();
  };

  return (
    <Wrapper>
      <Container>
        <TextInput
          ref={searchInput}
          selectionColor={theme.inputSelectionColor}
          onChangeText={onChangeText}
          onEndEditing={onEndEditingSearch}
          onSubmitEditing={onSubmitEditing}
          value={text}
        />

        <Target as={Animated.View} style={shiftUpDownAnim}>
          <Triger onPress={onPressSearch}>
            <StyledIcon style={{paddingRight: 10}} name="search" size={19} />
            <Text>Search...</Text>
          </Triger>
        </Target>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding-top: ${StatusBar.currentHeight + 'px'};
  background-color: ${props => props.theme.statusBarBg};
  opacity: 0.8;
`;

const Container = styled.View`
  background-color: ${props => props.theme.inputBgDefault};
  margin: 0 ${Spacings.Medium} ${Spacings.XSmall};
  border-radius: 6px;
  height: 40px;
  overflow: hidden;
`;
const Target = styled.View``;
const Triger = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 15px;
  border-radius: 6px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Text = styled.Text`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.theme.inputTextDefault};
`;

const StyledIcon = styled(Icon)`
  color: ${props => props.theme.inputIconDefault};
`;
const TextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  margin-left: 12px;
  color: ${props => props.theme.inputTextFocus};
  z-index: 0;
`;

export default SearchBar;
