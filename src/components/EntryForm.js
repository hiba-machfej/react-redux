import React, { Fragment } from 'react';
import { Segment, Checkbox, Form } from 'semantic-ui-react';

const EntryForm = ({
  setDescription,
  setValue,
  setIsExpense,
  isExpense,
  value,
  description,
}) => {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shiny thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => {
            setIsExpense(!isExpense);
          }}
        />
      </Segment>
    </Fragment>
  );
};

export default EntryForm;
