import React from 'react';
import { Statistic } from 'semantic-ui-react';

const StatisticFields = ({ size, color, value, label }) => {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: 'left' }}>{label}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default StatisticFields;
