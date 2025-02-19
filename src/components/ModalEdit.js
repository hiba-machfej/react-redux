import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import { closeEditModal } from '../actions/modals.actions.js';
import { useDispatch } from 'react-redux';
import useEntryDetails from '../hooks/useEntryDetails.js';

const ModalEdit = ({ isOpen, description, value, isExpense, id }) => {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form unstackable>
            <EntryForm
              setDescription={entryUpdate.setDescription}
              setValue={entryUpdate.setValue}
              setIsExpense={entryUpdate.setIsExpense}
              description={entryUpdate.description}
              value={entryUpdate.value}
              isExpense={entryUpdate.isExpense}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
