import express from 'express';
import { products, users } from './routes';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);

app.use(errorHandler);

export default app;
