import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  isEmpty: true,
  error: null,
};

export const searchAsync = createAsyncThunk(
  'AsyncStorage/getThemeSettings',
  async () => {
    const value = await AsyncStorage.getItem('@themeSettings').catch(e => {
      throw e;
    });
    return value;
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

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsEmpty: state => {
      state.isEmpty = !state.isEmpty;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) state.theme = action.payload;
        state.status = 'idle';
      })
      .addCase(searchAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {setIsEmpty} = searchSlice.actions;

export const isEmpty = state => state.search.isEmpty;

export default searchSlice.reducer;
