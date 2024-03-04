import { createSlice } from "@reduxjs/toolkit";

const extraSlice = createSlice({
  name: "extra",
  initialState: {
    show: false,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.show = true;
    },
    handleClose: (state, action) => {
      state.show = false;
    },
  },
});
export const { toggleShow, handleClose } = extraSlice.actions;

export default extraSlice.reducer;
