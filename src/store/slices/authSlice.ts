import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface CurrentUser {
  id:string
  name: string
  email: string
  role: string
  status: string
  lastLogin: string
}

interface AuthState {
  currentUser : CurrentUser | null
  isAuthenticated: boolean;
  admin:boolean
}

const initialState: AuthState = {
  currentUser:null,
  isAuthenticated: false,
  admin:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.admin = false;
      state.currentUser = null
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.admin = action.payload
    },
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.currentUser = action.payload
      state.isAuthenticated = true;
    }
  },
});

export const {logout , setAdmin , setCurrentUser } = authSlice.actions;
export default authSlice.reducer;