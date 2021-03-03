import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import useInputState from './hooks/useInputState';

function NewEntryForm({ addEntry }) {
  const [
    description,
    handleDescriptionChange,
    resetDescription,
  ] = useInputState('');
  const [value, handleValueChange, resetValue] = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(description, value);
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
      <ButtonSaveOrCancel handleSubmit={handleSubmit} />
    </Form>
  );
}

export default NewEntryForm;
