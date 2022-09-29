import PropTypes from 'prop-types';
import {Section, Title, List, Items, TextLable, TextPerc} from './statistics.styled';

export const Statistics = ({ title, stats }) => (
  <Section>
    <Title>{title}</Title>
    <List>
      {stats.map(stat => (
        <Items key={stat.id}>
          <TextLable>{stat.label} </TextLable>
          <TextPerc>{stat.percentage}%</TextPerc>
        </Items>
      ))}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}