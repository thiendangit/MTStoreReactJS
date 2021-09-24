import {
  createSlice,
  createSelector,
  PayloadAction,
  // createAsyncThunk
} from '@reduxjs/toolkit';
import { RootState } from '../configureStore';
import { Category } from 'WooCommerce';

export type UIState = {
  categoryItems: Category[];
};

export const initialUIState = {
  categoryItems: [],
} as UIState;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialUIState,
  reducers: {
    onSetCategories: (state, { payload }: PayloadAction<Category[]>) => {
      state.categoryItems = payload;
    },
  },
});

const { reducer } = categoriesSlice;

export const { onSetCategories } = categoriesSlice.actions;

export const getCategories = createSelector(
  (state: RootState) => state.categories.categoryItems,
  (categoryItems) => categoryItems,
);

export default reducer;
