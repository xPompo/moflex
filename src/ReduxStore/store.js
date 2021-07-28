import { createSlice, configureStore } from "@reduxjs/toolkit";

const init = { AllData: {} };
const indSlice = createSlice({
  name: "index",
  initialState: init,
  reducers: {
    getAllData(state, action) {
      state.AllData = action.payload;
    },
  },
});

const store = configureStore({ reducer: { indexRed: indSlice.reducer } });
export default store;
export const indAction = indSlice.actions;
