import PropTypes from 'prop-types';
import { Box } from 'Box';
import {
  Avatart,
  UserName,
  UserInfo,
  ProfileList,
  ProfileItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Box
      width={256}
      ml="auto"
      mr="auto"
      pt={4}
      backgroundColor="background"
      borderRadius="normal"
      boxShadow={
        '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)'
      }
      borderColor="none"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatart src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>

      <ProfileList>
        <ProfileItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ProfileItem>
        <ProfileItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ProfileItem>
        <ProfileItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ProfileItem>
      </ProfileList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
