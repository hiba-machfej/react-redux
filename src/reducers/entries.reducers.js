const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water Bill',
    value: 20,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: 300,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power Bill',
    value: 50,
    isExpense: true,
  },
];

const EntriesReducers = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case 'REMOVE_ENTRY':
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;

    default:
      return state;
  }
};

export default EntriesReducers;
