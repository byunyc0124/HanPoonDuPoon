import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false,
  accountNumber: null,
  bankCode: null,
  balance: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    registerAccount(state, action) {
      return { ...state, isRegistered: true, ...action.payload };
    },
    unregisterAccount(state) {
      return initialState;
    },
  },
});

export default accountSlice;
export const accountActions = accountSlice.actions;
