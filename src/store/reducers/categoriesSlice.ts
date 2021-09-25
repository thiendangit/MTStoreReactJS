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
  isLoading: boolean;
};

export const initialUIState = {
  categoryItems: [],
  isLoading: true,
} as UIState;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialUIState,
  reducers: {
    onSetCategories: (state, { payload }: PayloadAction<Category[]>) => {
      state.categoryItems = payload;
    },
    onSetLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

const { reducer } = categoriesSlice;

export const { onSetCategories, onSetLoading } = categoriesSlice.actions;

export const getCategories = createSelector(
  (state: RootState) => state.categories.categoryItems,
  (categoryItems) => categoryItems,
);
export const getCategoriesState = createSelector(
  (state: RootState) => state.categories,
  (categories) => categories,
);
export default reducer;
