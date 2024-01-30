
import { createSlice } from '@reduxjs/toolkit';

const responsiveSlice = createSlice({
  name: 'responsive',
  initialState: {
    isMobile: false,
  },
  reducers: {
    setResponsive: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setResponsive }   = responsiveSlice.actions;
export const selectResponsive    = (state) => state.responsive.isMobile;

export default responsiveSlice.reducer;