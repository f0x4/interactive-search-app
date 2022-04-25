import {StatusBar} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../theme/Colors';
import Icon from 'react-native-vector-icons/dist/Feather';
import {Spacings} from '../../theme/Spacings';
import {useTheme} from 'styled-components';

const SearchBar = props => {
  const theme = useTheme();
  const [text, onChangeText] = React.useState('');

  return (
    <Wrapper>
      <Container>
        <Placeholder>
          <StyledIcon style={{paddingRight: 10}} name="search" size={19} />
          <Text>Search...</Text>
        </Placeholder>

        <TextInput
          selectionColor={theme.inputSelectionColor}
          onChangeText={onChangeText}
          value={text}
        />
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
const Placeholder = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 15px;
  border-radius: 6px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  transform: translateY(0px);
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
`;

export default SearchBar;
