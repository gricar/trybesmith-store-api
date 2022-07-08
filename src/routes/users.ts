import { Router } from 'express';
import UserController from '../controller/user.controller';

const users = Router();

const { create } = new UserController();

users.post('/', create);

export default users;
