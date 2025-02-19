import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeEntryRedux } from '../actions/entries.action';
import { openEditModal } from '../actions/modals.actions.js';

const EntryLine = ({ id, description, value, isExpense = false }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} style={{ textAlign: 'left' }}>
              {description}
            </Grid.Column>
            <Grid.Column width={3}>{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
