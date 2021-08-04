import { createSlice, configureStore } from "@reduxjs/toolkit";

const init = { movieID: null, AllData: {} };
const indSlice = createSlice({
  name: "index",
  initialState: init,
  reducers: {
    getID(state, action) {
      state.movieID = action.payload;
    },
  },
});

const store = configureStore({ reducer: { indexRed: indSlice.reducer } });
export default store;
export const indAction = indSlice.actions;
