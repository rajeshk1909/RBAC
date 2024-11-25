export const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Viewer", status: "Active" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Admin", status: "Active" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Editor", status: "Inactive" },
  { id: 6, name: "David Clark", email: "david@example.com", role: "Viewer", status: "Active" },
  { id: 7, name: "Eve Lewis", email: "eve@example.com", role: "Editor", status: "Active" },
  { id: 8, name: "Frank Miller", email: "frank@example.com", role: "Admin", status: "Inactive" },
  { id: 9, name: "Grace Walker", email: "grace@example.com", role: "Viewer", status: "Active" },
  { id: 10, name: "Hannah Harris", email: "hannah@example.com", role:"Admin", status: "Active" },
];

export type usersDataTypes = (typeof usersData)[0]