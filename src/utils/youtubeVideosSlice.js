import { createSlice } from "@reduxjs/toolkit";

const youTubeVideosSlice = createSlice({
  name: "youtubevideos",
  initialState: {
    videos: [],
    searchResult: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setSearchVideosResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { setVideos, setSearchVideosResult } = youTubeVideosSlice.actions;
export default youTubeVideosSlice.reducer;
