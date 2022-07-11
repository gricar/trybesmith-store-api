import { sign, SignOptions } from 'jsonwebtoken';
import IUser, { IBaseUser } from '../interfaces/user.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'assimFunciona';
// const { JWT_SECRET } = process.env;

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function generateToken(user: Omit<IUser | IBaseUser, 'password'>) { 
  return sign({ user }, JWT_SECRET, jwtConfig);
}

export default generateToken;
