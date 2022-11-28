import { createSlice } from "@reduxjs/toolkit";

export const modalActiveSlice = createSlice({
  name: "modalActive",
  initialState: false,
  reducers: {
    openModal(state) {
      return true;
    },

    closeModal(state) {
      return false;
    },
  },
});

const { actions, reducer } = modalActiveSlice;

export const { openModal, closeModal } = actions;

export default reducer;
