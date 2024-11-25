export const rolesData = [
  { id: 1, name: "Admin", permissions: ["READ", "WRITE", "DELETE"] },
  { id: 2, name: "Editor", permissions: ["READ", "WRITE"] },
];

export type rolesType = (typeof rolesData)[0]