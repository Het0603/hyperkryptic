export interface CreateUserInput {
  name: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export function createUser(input: CreateUserInput): User {
  return {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email,
  };
}
