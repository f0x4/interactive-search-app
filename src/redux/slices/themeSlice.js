import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEY} from '../../constants/constants';

const initialState = {
  theme: 'device',
  status: 'idle',
  showIndicator: true,
  error: null,
};

export const getThemeSettingsAsync = createAsyncThunk(
  'AsyncStorage/getThemeSettings',
  async () => {
    const value = await AsyncStorage.getItem('@themeSettings').catch(e => {
      throw e;
    });
    return value;
  },
  dropReFetch,
);
export const storeThemeSettingsAsync = createAsyncThunk(
  'AsyncStorage/storeThemeSettings',
  async value => {
    await AsyncStorage.setItem('@themeSettings', value).catch(e => {
      throw e;
    });
  },
  dropReFetch,
);

const dropReFetch = {
  condition: (_, {getState}) => {
    const {status} = getState().theme;

    if (status === 'succeeded' || status === 'loading') {
      // Already fetched or in progress, don't need to re-fetch
      return false;
    }
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: state => {
      state.theme = 'dark';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getThemeSettingsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getThemeSettingsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) state.theme = action.payload;
        state.status = 'idle';
      })
      .addCase(getThemeSettingsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {setTheme} = themeSlice.actions;

export const getTheme = state => state.theme.theme;

export default themeSlice.reducer;
