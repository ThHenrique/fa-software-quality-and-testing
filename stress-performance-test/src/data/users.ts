import { IUser, UserRoleEnum } from "../shared/interfaces/user.interface";

export const users: IUser[] = [
  {
    id: "",
    name: "Example",
    email: "example@example.com",
    password: "",
    role: UserRoleEnum.VIEWER
  }
];
