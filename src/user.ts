export interface User {
  id: string;
  name: string;
  email: string;
}

const KNOWN_USERS: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

export class UserService {
  private readonly users: User[];

  constructor(users: User[] = KNOWN_USERS) {
    this.users = users;
  }

  listUsers(): User[] {
    return [...this.users];
  }

  findUser(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
