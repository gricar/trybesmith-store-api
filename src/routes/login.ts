import { Router } from 'express';
import LoginController from '../controller/login.controller';
import validateLogin from '../middlewares/validateLogin';

const login = Router();

const { authenticate } = new LoginController();

login.use(validateLogin);
login.post('/', authenticate);

export default login;
