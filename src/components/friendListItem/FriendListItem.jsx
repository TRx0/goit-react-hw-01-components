import PropTypes from 'prop-types';
import { Items, Status, Avatar, Text } from './friendListItem.styled';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <Items key={id} >
    <Status event={isOnline}>{isOnline}
      <AiOutlineCheckCircle style={isOnline ? {display: "block"} : {display: "none"}}/>
      <AiOutlineCloseCircle style={isOnline ? {display: "none"} : {display: "block"}}/>
    </Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Text>{name}</Text>
  </Items>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};