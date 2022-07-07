import express from 'express';
import products from './routes';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/products', products);

app.use(errorHandler);

export default app;
