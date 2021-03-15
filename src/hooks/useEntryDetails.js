import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.action';
import { closeEditModal } from '../actions/modals.actions.js';
import { v4 as uuidv4 } from 'uuid';

const useEntryDetails = (desc = '', val = '', isExp = true) => {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  const updateEntry = (id) => {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  };
  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    resetValues();
  };

  const resetValues = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  };

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
};

export default useEntryDetails;
