import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import youTubeVideosSliceReducer from "./youtubeVideosSlice";
import searchSliceReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    app: appSliceReducer,
    youtubevideos: youTubeVideosSliceReducer,
    search: searchSliceReducer,
  },
});

export default appStore;
