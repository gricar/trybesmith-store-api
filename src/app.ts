import express from 'express';
import { login, orders, products, users } from './routes';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/orders', orders);
app.use('/products', products);
app.use('/users', users);

app.use(errorHandler);

export default app;
