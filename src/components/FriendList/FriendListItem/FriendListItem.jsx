import { Item, Name, IsOnline } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <IsOnline isOnline={isOnline}></IsOnline>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
