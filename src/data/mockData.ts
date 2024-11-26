import { User, Role, Permission } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@vrvsecurity.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-03-10T15:30:00Z',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@vrvsecurity.com',
    role: 'Security Analyst',
    status: 'active',
    lastLogin: '2024-03-09T11:20:00Z',
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike.c@vrvsecurity.com',
    role: 'Auditor',
    status: 'inactive',
    lastLogin: '2024-02-28T09:45:00Z',
  },
];

export const mockPermissions: Permission[] = [
  {
    id: '1',
    name: 'view_users',
    description: 'View user list and details',
    module: 'users',
  },
  {
    id: '2',
    name: 'manage_users',
    description: 'Create, update, and delete users',
    module: 'users',
  },
  {
    id: '3',
    name: 'view_roles',
    description: 'View roles and permissions',
    module: 'roles',
  },
  {
    id: '4',
    name: 'manage_roles',
    description: 'Create, update, and delete roles',
    module: 'roles',
  },
  {
    id: '5',
    name: 'view_security',
    description: 'View security logs and alerts',
    module: 'security',
  },
];

export const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: mockPermissions,
  },
  {
    id: '2',
    name: 'Security Analyst',
    description: 'Security monitoring and analysis',
    permissions: mockPermissions.filter(p => p.module === 'security'),
  },
  {
    id: '3',
    name: 'Auditor',
    description: 'System auditing and reporting',
    permissions: mockPermissions.filter(p => ['users', 'roles'].includes(p.module)),
  },
];