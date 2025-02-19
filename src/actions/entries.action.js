const types = {
  GET_ENTRIES: 'GET_ENTRIES',
  POPULATE_ENTRIES: 'POPULATE_ENTRIES',
  POPULATE_VALUES: 'POPULATE_VALUES',
  ADD_ENTRY: 'ADD_ENTRY',
  REMOVE_ENTRY: 'REMOVE_ENTRY',
  UPDATE_ENTRY: 'UPDATE_ENTRY',
};
export default types;
export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};

export const removeEntryRedux = (id) => {
  return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};
export const getAllEntries = () => {
  return { type: types.GET_ENTRIES };
};

export const populateEntries = (entries) => {
  return { type: types.POPULATE_ENTRIES, payload: entries };
};

export const populateValues = (id, value) => {
  return { type: types.POPULATE_VALUES, payload: { id, value } };
};
