import PropTypes from 'prop-types';
import { Box } from 'Box';
import { Title, ListStats, ItemStats } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      ml="auto"
      mr="auto"
      mt={5}
      width={406}
      backgroundColor="background"
      textAlign="center"
      boxShadow={
        '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)'
      }
      as="section"
    >
      {title && <Title>{title}</Title>}

      <ListStats>
        {stats.map(({ id, label, percentage }) => (
          <ItemStats key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </ItemStats>
        ))}
      </ListStats>
    </Box>
  );
};

Statistics.propeTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
