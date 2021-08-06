import { createSlice, configureStore } from "@reduxjs/toolkit";

const init = { movieID: null };
const indSlice = createSlice({
  name: "index",
  initialState: init,
  reducers: {
    getID(state, action) {
      state.movieID = action.payload;
    },
  },
});

const store = configureStore({ reducer: indSlice.reducer });
export default store;
export const indAction = indSlice.actions;
