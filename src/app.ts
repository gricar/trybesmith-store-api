import express from 'express';
import products from './routes';

const app = express();

app.use(express.json());

app.use('/products', products);

export default app;
