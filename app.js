import express from "express";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/templates'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`App is runing on port ${port}`);
});