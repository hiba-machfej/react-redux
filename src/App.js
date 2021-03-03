import { Container } from 'semantic-ui-react';
import { useState } from 'react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import StatisticFields from './components/StatisticFields';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import './App.css';

const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: '$1000,00',
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water Bill',
    value: '$20,00',
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300,00',
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power Bill',
    value: '$50,00',
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };
  const addEntry = (description, value) => {
    // const result = [...entries, { id: entries.length + 1, description, value }];
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
    });
    setEntries(result);
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <StatisticFields size="small" label="Your balance" value="2,550.53" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;
