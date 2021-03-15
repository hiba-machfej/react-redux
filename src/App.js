import { Container } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import StatisticFields from './components/StatisticFields';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {
  // const [entries, setEntries] = useState(initialEntries);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += entry.value);
      } else {
        return (totalIncomes += entry.value);
      }
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget" />
      <StatisticFields size="small" label="Your balance" value={total} />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
