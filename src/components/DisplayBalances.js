import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StatisticFields from './StatisticFields';

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <StatisticFields
              size="tiny"
              color="green"
              label="Income:"
              value="1,045.53"
            />
          </Grid.Column>
          <Grid.Column>
            <StatisticFields
              size="tiny"
              color="red"
              label="Expenses:"
              value="623"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
