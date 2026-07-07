export interface User {
  id: string;
  name: string;
  email: string;
}

export function createUser(name: string, email: string): User {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  return {
    id: crypto.randomUUID(),
    name,
    email,
  };
}
