require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Origin',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/health', (req, res) => {
  res.send('Alive');
});

app.listen(process.env.PORT, () => {
  console.log(`User service listening on port: ${process.env.PORT}`);
});
