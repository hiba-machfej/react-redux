import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import StatisticFields from './components/StatisticFields';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import './App.css';

function App() {
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
