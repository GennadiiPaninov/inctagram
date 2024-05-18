import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return !!(
          action.type.endsWith("/fulfilled") ||
          action.type.endsWith("/removeMutationResult")
        );
      },
      (state) => {
        state.error = undefined;
      },
    );
  },
  initialState: {
    email: undefined as string | undefined,
    error: undefined as string | undefined,
  },
  name: "authSlice",
  reducers: {
    setEmail: (state, action: PayloadAction<string | undefined>) => {
      state.email = action.payload;
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
});

export const authReducers = slice.reducer;
export const authActions = slice.actions;
