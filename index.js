import express from 'express';
import mysql from 'mysql2';
import fs from 'fs';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';

const swaggerDocument = YAML.parse(fs.readFileSync('./open_api.yml', 'utf8'));

const db = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'openapi' });
const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
