import { IUser } from "../interfaces/user.interface";
import { read, write } from "../services/fs.services";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await read();
  }
  public async create(dto: Partial<IUser>): Promise<IUser> {
    const users = await read();

    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      name: dto.name,
      email: dto.email,
      password: dto.password,
    };
    users.push(newUser);
    await write(users);

    return newUser;
  }
  public async getById(userId: number): Promise<IUser | null> {
    const users = await read();
    return users.find((user) => user.id === userId);
  }
  public async update(userId: number, dto: Partial<IUser>): Promise<IUser> {
    const users = await read();
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) return null;

    users[index] = { ...users[index], ...dto };
    await write(users);
    return users[index];
  }

  public async delete(userId: number): Promise<boolean> {
    const users = await read();
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) return false;

    users.splice(index, 1);
    await write(users);
    return true;
  }
}

export const userRepository = new UserRepository();
