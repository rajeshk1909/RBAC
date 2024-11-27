import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
import { mockUsers } from '../../data/mockData';


interface UsersState {
  users: User[];
}

const userData = localStorage.getItem("users")
const mockUserData  = userData !== null ? JSON.parse(userData) : mockUsers

const initialState: UsersState = {
  users: mockUserData,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;