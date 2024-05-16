import { createSlice } from '@reduxjs/toolkit';
const initialState = { filter: '' };
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  selectors: {
    selectFilter: state => state.filter,
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const { selectFilter } = filterSlice.selectors;
