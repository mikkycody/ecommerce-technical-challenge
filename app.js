import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

// Set up the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
const PORT = process.env.port || 5300;


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});