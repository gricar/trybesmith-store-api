import { Router } from 'express';
import UserController from '../controller/user.controller';
import validateUser from '../middlewares/validateUser';

const users = Router();

const { create } = new UserController();

users.use(validateUser);
users.post('/', create);

export default users;
