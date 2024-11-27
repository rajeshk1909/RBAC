import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../../types';
import { mockRoles } from '../../data/mockData';

interface RolesState {
  roles: Role[];
}

const data = localStorage.getItem("roles")
const rolesData = data !== null ? JSON.parse(data) : mockRoles

const initialState: RolesState = {
  roles: rolesData,
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    addRole: (state, action: PayloadAction<Role>) => {
      state.roles.push(action.payload);
    },
    updateRole: (state, action: PayloadAction<Role>) => {
      const index = state.roles.findIndex(role => role.id === action.payload.id);
      if (index !== -1) {
        state.roles[index] = action.payload;
      }
    },
    deleteRole: (state, action: PayloadAction<string>) => {
      state.roles = state.roles.filter(role => role.id !== action.payload);
    },
    setRoles: (state, action: PayloadAction<Role[]>) => {
      state.roles = action.payload;
    },
  },
});

export const { addRole, updateRole, deleteRole, setRoles } = rolesSlice.actions;
export default rolesSlice.reducer;