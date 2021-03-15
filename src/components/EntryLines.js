import React from 'react';
import EntryLine from './EntryLine';
import { Container } from 'semantic-ui-react';

const EntryLines = ({ entries }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine description={entry.description} {...entry} />
      ))}
    </Container>
  );
};

export default EntryLines;
