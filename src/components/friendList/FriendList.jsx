import PropTypes from 'prop-types';
import { FriendListItem } from '../friendListItem/FriendListItem';
import { List } from './friendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
    ))}
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};