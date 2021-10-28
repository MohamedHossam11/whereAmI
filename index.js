const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const whereAmIRouter = require('./Routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('No such url');
});

app.use('/whereAmI', whereAmIRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept'
  );
  next();
});

app.listen(port, () => {
  console.log(`WhereAmI is listening at http://localhost:${port}`);
});
