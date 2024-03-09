import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: null as UserState | null,
  reducers: {
    // loginUser: (state, action: PayloadAction<UserState>) => {
    //   return action.payload;
    // },
    logoutUser: () => {
      return null;
    },
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
