import express, { Application } from 'express';
import userRoutes from './Router/index';

const app: Application = express();

app.use(express.json());

app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});