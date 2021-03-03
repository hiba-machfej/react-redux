import React, { useState } from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import useInputState from './hooks/useInputState';

function NewEntryForm({ addEntry }) {
  const [
    description,
    handleDescriptionChange,
    resetDescription,
  ] = useInputState('');
  const [value, handleValueChange, resetValue] = useInputState('');
  const [isExpense, setIsExpense] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(description, value, isExpense);
    resetDescription();
    resetValue();
  };

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shiny thing"
          value={description}
          onChange={handleDescriptionChange}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={handleValueChange}
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
      <ButtonSaveOrCancel handleSubmit={handleSubmit} />
    </Form>
  );
}

export default NewEntryForm;
