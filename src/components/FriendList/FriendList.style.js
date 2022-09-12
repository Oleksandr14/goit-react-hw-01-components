import styled from 'styled-components';

export const List = styled.ul`
  margin: ${p => p.theme.space[5]}px auto 0;
  padding: ${p => p.theme.space[0]}px;
  width: ${p => p.theme.space[8]}px;
  list-style: ${p => p.theme.borders.none};
`;
