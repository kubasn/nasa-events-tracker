import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import photosReducer from "../features/photoSlice";

export default configureStore({
  reducer: {
    photo: photosReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
