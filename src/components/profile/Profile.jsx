import PropTypes from 'prop-types';
import {
  Text,
  TitleText,
  CardConainer,
  List,
    Items,
    Avatar,
    SpanTitle,
    SpanDescr,
  Box,
} from './profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => (
  <Box className="profile">
            <CardConainer className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <TitleText className="name">{username}</TitleText>
        <Text className="tag">@{tag}</Text>
        <Text className="location">{location}</Text>
      </CardConainer>

      <List className="stats">
        <Items>
          <SpanTitle className="label">Followers </SpanTitle>
          <SpanDescr className="quantity">{stats.followers}</SpanDescr>
        </Items>
        <Items>
          <SpanTitle className="label">Views </SpanTitle>
          <SpanDescr className="quantity">{stats.views}</SpanDescr>
        </Items>
        <Items>
          <SpanTitle className="label">Likes </SpanTitle>
          <SpanDescr className="quantity">{stats.likes}</SpanDescr>
        </Items>
      </List>
  </Box>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};