import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel({ handleSubmit }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={handleSubmit}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
