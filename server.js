const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const cors = require('cors');


app.use(cors());

const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 5, 
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/data', limiter); 

app.get('/data', (req, res) => {
  const data = { message: 'This is the CORS response from the API' };
  res.json(data);
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
