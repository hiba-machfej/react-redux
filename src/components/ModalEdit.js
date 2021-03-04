import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const ModalEdit = ({
  isOpen,
  setIsOpen,
  setDescription,
  setValue,
  setIsExpense,
  description,
  value,
  isExpense,
  handleSubmit,
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form unstackable>
            <EntryForm
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setDescription={setDescription}
              setValue={setValue}
              setIsExpense={setIsExpense}
              description={description}
              value={value}
              isExpense={isExpense}
              handleSubmit={handleSubmit}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
