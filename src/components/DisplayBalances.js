import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StatisticFields from './StatisticFields';

const DisplayBalances = ({ incomeTotal, expenseTotal }) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <StatisticFields
              size="tiny"
              color="green"
              label="Income:"
              value={incomeTotal}
            />
          </Grid.Column>
          <Grid.Column>
            <StatisticFields
              size="tiny"
              color="red"
              label="Expenses:"
              value={expenseTotal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
