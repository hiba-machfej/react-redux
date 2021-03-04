import { Container } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import StatisticFields from './components/StatisticFields';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
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

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };
  const addEntry = () => {
    // const result = [...entries, { id: entries.length + 1, description, value }];
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(description, value, isExpense);
    setValue('');
    setDescription('');
  };

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <StatisticFields size="small" label="Your balance" value="2,550.53" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        description={description}
        value={value}
        isExpense={isExpense}
        handleSubmit={handleSubmit}
      />
      <ModalEdit
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
    </Container>
  );
}

export default App;
