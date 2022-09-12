import styled from 'styled-components';

export const Avatart = styled.img`
  border-radius: ${p => p.theme.radii.round};
  width: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const UserName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserInfo = styled.p`
  font-size: ${p => p.theme.fontSizes.s}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ProfileList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.accentOpacity};
  list-style: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[0]}px;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accent};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.xs}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
