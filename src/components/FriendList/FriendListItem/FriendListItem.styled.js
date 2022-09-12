import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
  margin-left: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const IsOnline = styled.span`
  display: inline-block;
  margin-right: ${p => p.theme.space[3]}px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')}};
`;
