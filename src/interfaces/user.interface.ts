export interface IBaseUser {
  username: string,
  password: string,
}

export default interface IUser extends IBaseUser {
  id?: number,
  classe: string,
  level: number,
  statusCode?: string,
}
