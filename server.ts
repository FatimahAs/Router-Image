import express from 'express';
import Router from './Router/index';

const app = express();

app.use(Router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});