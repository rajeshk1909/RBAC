export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: string;
  status: string;
  lastLogin: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  module: string;
}

export type Module = 'users' | 'roles' | 'security' | 'reports' | 'settings';