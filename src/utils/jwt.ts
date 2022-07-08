import { sign, SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'assimFunciona';
// const { JWT_SECRET } = process.env;

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (user: Omit<IUser, 'password'>) => sign({ user }, JWT_SECRET, jwtConfig);

export default generateToken;
