import { Container } from 'semantic-ui-react';
import { useState } from 'react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import StatisticFields from './components/StatisticFields';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import './App.css';

const initialEntries = [
  {
    description: 'Work income',
    value: '$1000,00',
    isExpense: false,
  },
  {
    description: 'Water Bill',
    value: '$20,00',
    isExpense: true,
  },
  {
    description: 'Rent',
    value: '$300,00',
    isExpense: true,
  },
  {
    description: 'Power Bill',
    value: '$50,00',
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title="Budget" />
      <StatisticFields size="small" label="Your balance" value="2,550.53" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine description="income" value="$10.99" />
      <EntryLine description="expense" value="$10.99" isExpense={true} />

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
