import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[5]}px;
  width: 476px;
  background-color: ${p => p.theme.colors.background};
  border-collapse: collapse;
`;

export const TableData = styled.td`
  padding: ${p => p.theme.space[3]}px 0;
  color: #808080;
  text-align: center;
  border: 1px solid #e9e9e9;
`;

export const TableRoad = styled.tr`
  &:nth-child(2n) {
    background-color: #e9e9e9;
  }
`;

export const TableHead = styled.th`
  padding: ${p => p.theme.space[3]}px 0;
  color: ${p => p.theme.colors.background};
  border: 1px solid #e9e9e9;
`;

export const THead = styled.thead`
  background-color: ${p => p.theme.colors.primary};
`;
