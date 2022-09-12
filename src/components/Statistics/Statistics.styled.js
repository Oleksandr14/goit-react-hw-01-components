import styled from 'styled-components';
import { getRandomHexColor } from 'components/Utils/randomColor';

export const Title = styled.h2`
  display: inline-flex;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.secondary};
  text-transform: uppercase;
`;

export const ListStats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[0]}px;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: ${getRandomHexColor};
  padding: ${p => p.theme.space[4]}px;
`;

export const Info = styled.span`
  color: ${p => p.theme.colors.background};
`;
