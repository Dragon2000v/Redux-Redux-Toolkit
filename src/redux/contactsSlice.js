import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  selectors: { selectContacts: state => state.contacts },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(x => x.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
