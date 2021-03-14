import React from 'react';
import EntryLine from './EntryLine';
import { Container } from 'semantic-ui-react';

const EntryLines = ({ entries, editEntry }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          description={entry.description}
          {...entry}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
};

export default EntryLines;
