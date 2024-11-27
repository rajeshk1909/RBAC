import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the current user
interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
  password: string;
}

const data = localStorage.getItem("currentUser")
const currentUserData = data !== null ? JSON.parse(data) : null
interface AuthState {
  isAuthenticated: boolean;
  admin: boolean;
  currentUser : CurrentUser | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  admin: false,
  currentUser :currentUserData ,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.admin = false;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.admin = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.currentUser = action.payload
      state.isAuthenticated = true;
    },
  },
});

export const { logout, setAdmin, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
