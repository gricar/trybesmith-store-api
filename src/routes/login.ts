import { Router } from 'express';
// import UserController from '../controller/user.controller';
import validateLogin from '../middlewares/validateLogin';

const login = Router();

// const { create } = new UserController();

login.use(validateLogin);
// login.post('/', create);

export default login;
