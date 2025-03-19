import express from 'express';
import mysql from 'mysql2';

const db = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'openapi' });
const app = express();

app.get('/users', (req, res) => {
  db.query('SELECT * FROM user', (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(result);
  });
});
app.listen(3000, () => console.log('server berjalan di port 3000!'));
