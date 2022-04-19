import {configureStore} from '@reduxjs/toolkit';
import themeReduser from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReduser,
  },
});
