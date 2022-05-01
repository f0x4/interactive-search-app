import {configureStore} from '@reduxjs/toolkit';
import searchReduser from './slices/searchSlice';
import themeReduser from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReduser,
    search: searchReduser,
  },
});
