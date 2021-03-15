import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import { Form } from 'semantic-ui-react';
import useEntryDetails from '../hooks/useEntryDetails.js';

const NewEntryForm = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();
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
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
};

export default NewEntryForm;
