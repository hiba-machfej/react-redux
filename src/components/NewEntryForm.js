import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import { Form } from 'semantic-ui-react';

const NewEntryForm = ({
  setIsExpense,
  description,
  value,
  isExpense,
  handleSubmit,
  setDescription,
  setValue,
}) => {
  return (
    <Form unstackable>
      <EntryForm
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        description={description}
        value={value}
        isExpense={isExpense}
      />
      <ButtonSaveOrCancel handleSubmit={handleSubmit} />
    </Form>
  );
};

export default NewEntryForm;
