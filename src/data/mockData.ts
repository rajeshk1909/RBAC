import { User, Role, Permission } from '../types';

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@vrvsecurity.com",
    role: "Admin",
    status: "active",
    lastLogin: "2024-03-10T15:30:00Z",
    password: "John123",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@vrvsecurity.com",
    role: "Security Analyst",
    status: "active",
    lastLogin: "2024-03-09T11:20:00Z",
    password: "Sarah123",
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike.c@vrvsecurity.com",
    role: "Auditor",
    status: "inactive",
    lastLogin: "2024-02-28T09:45:00Z",
    password: "Mike123",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@vrvsecurity.com",
    role: "Security Analyst",
    status: "active",
    lastLogin: "2024-03-08T10:15:00Z",
    password: "Emily123",
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@vrvsecurity.com",
    role: "Admin",
    status: "inactive",
    lastLogin: "2024-02-25T14:30:00Z",
    password: "David123",
  },
  {
    id: "6",
    name: "Jessica Williams",
    email: "jessica.williams@vrvsecurity.com",
    role: "Auditor",
    status: "active",
    lastLogin: "2024-03-07T12:50:00Z",
    password: "Jessica123",
  },
  {
    id: "7",
    name: "Chris Brown",
    email: "chris.brown@vrvsecurity.com",
    role: "Security Analyst",
    status: "active",
    lastLogin: "2024-03-05T08:10:00Z",
    password: "Chris123",
  },
  {
    id: "8",
    name: "Patricia Green",
    email: "patricia.green@vrvsecurity.com",
    role: "Admin",
    status: "inactive",
    lastLogin: "2024-02-15T16:05:00Z",
    password: "Patricia123",
  },
  {
    id: "9",
    name: "Robert Taylor",
    email: "robert.taylor@vrvsecurity.com",
    role: "Auditor",
    status: "active",
    lastLogin: "2024-03-04T13:40:00Z",
    password: "Robert123",
  },
  {
    id: "10",
    name: "Linda Martinez",
    email: "linda.martinez@vrvsecurity.com",
    role: "Security Analyst",
    status: "inactive",
    lastLogin: "2024-01-20T17:25:00Z",
    password: "Linda123",
  },
];


export type mockUsersTypes = (typeof mockUsers)[0]

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