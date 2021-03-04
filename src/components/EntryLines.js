import React from 'react';
import EntryLine from './EntryLine';
import { Container } from 'semantic-ui-react';

const EntryLines = ({ entries, deleteEntry, editEntry }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          description={entry.description}
          {...entry}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
};

export default EntryLines;
