import {StatusBar} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const StatusBarBg = () => {
  return <Background />;
};

const Background = styled.View`
  padding-top: ${StatusBar.currentHeight + 'px'};
  background-color: ${props => props.theme.statusBarBg};
  opacity: 0.6;
`;

export default StatusBarBg;
