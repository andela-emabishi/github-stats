const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.set('PORT', process.env.PORT || 3005); // In case PORT is set/specified by something else

app.get('/api', (req, res) => {
  res.send('Welcome to the github stats API');
});

app.get('/api/stats', (req, res) => {
  const username = req.query.username;
  if (!username) {
    res.json({
      status: 500,
      error: 'Please supply query parameter',
    });
  } else {
    app.get('https://api.github.com/users/${username}', (req, res) => {
      if (res.message) {
        res.json({
          error: res
        });
      } else {
        res.json({
          user: res
        });
      }
    });
  }
});

app.listen(app.get('PORT'), () => {
  console.log(`Server is listening at http://localhost:${app.get('PORT')}/api`); // eslint-disable-line
});