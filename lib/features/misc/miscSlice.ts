import { createSlice } from "@reduxjs/toolkit"

const miscSlice = createSlice({
  name: "misc",
  initialState: {
    tes: "test",
  },
  reducers: {
    // Add reducers here
    setTes: (state, action) => {
      state.tes = action.payload
    },
  },
})

export const { setTes } = miscSlice.actions
export default miscSlice.reducer
