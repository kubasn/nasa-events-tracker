import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photo = action.payload.photo;
    },
  },
});

export const { setPhotos } = photosSlice.actions;

export const { selectPhotos } = (state) => state.photos.photo;

export default photosSlice.reducer;
