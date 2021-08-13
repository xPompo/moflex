import { createSlice, configureStore } from "@reduxjs/toolkit";

const init = {
  movieID: null,
  pageNumber: 1,
  videoKey: "",
  likes: 0,
};
const indSlice = createSlice({
  name: "index",
  initialState: init,
  reducers: {
    getID(state, action) {
      state.movieID = action.payload;
    },
    getPage(state, action) {
      state.pageNumber = action.payload;
    },
    getVideoKey(state, action) {
      state.videoKey = action.payload;
    },
    getLikes(state, action) {
      state.likes = action.payload;
    },
  },
});

const store = configureStore({ reducer: indSlice.reducer });
export default store;
export const indAction = indSlice.actions;
