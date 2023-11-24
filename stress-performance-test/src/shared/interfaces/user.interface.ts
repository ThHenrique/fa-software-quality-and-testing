export enum UserRoleEnum {
  ADMIN = "ADMIN",
  VIEWER = "VIEWER",
}

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRoleEnum;
}

