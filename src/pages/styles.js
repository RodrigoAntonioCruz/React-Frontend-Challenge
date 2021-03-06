import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations'

import * as colors from '../assets/colors';

export const MainPage = styled.div``;

export const HeaderContainer = styled.div`
  animation: 1.0s ${keyframes`${slideInDown}`}; 
`;
export const ViewContainer = styled.div`
  background-color: ${colors.lightGray};
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
`;
