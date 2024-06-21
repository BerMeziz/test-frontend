import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../store";

const initialState: { loading: boolean } = {
  loading: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const loadingSelector = (state: ReduxState) => state.loading;