import styled from 'styled-components/native';

const H3 = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: ${props => props.theme.headline};
`;

export default H3;
