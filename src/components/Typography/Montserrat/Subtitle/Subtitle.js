import styled from 'styled-components/native';

export const Subtitle = styled.Text`
  font-family: Montserrat-Medium;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  color: ${props => props.theme.subtitle};
`;
