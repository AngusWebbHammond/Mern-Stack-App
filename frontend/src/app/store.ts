import { configureStore } from "@reduxjs/toolkit";
import sortingTypeReducer from "../features/sortingType/sortingTypeSlice";

export const store = configureStore({
  reducer: {
    sortingType: sortingTypeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
