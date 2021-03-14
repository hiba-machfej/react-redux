import React, { useState } from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import { Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addEntryRedux } from '../actions/entries.action';
import { v4 as uuidv4 } from 'uuid';

const NewEntryForm = ({}) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();
  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    setDescription('');
    setValue('');
    setIsExpense(true);
  };
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
