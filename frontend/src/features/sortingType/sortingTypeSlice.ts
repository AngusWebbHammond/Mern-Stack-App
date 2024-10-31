import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SortingTypeState {
  value: string;
}

const initialState: SortingTypeState = {
  value: "type",
};

export const sortingTypeSlice = createSlice({
  name: "sortingType",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = sortingTypeSlice.actions;

export default sortingTypeSlice.reducer;
