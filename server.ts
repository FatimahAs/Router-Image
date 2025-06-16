import express from 'express';
import Routes from './Router/index';

const app = express();

app.use(Routes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});