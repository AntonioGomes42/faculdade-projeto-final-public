import express from "express";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import favicon from "serve-favicon";
import { getAdvices } from "./services/advices.services.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/templates'));

function returnOnConstructionPage(res) {
  res.render('on-construction');
}
app.get('/', (req, res) => {
  res.render('home');
});

app.get("/avisos", async (req, res) => {
  const advices = await getAdvices();
  res.render('advices', { dataToRender:advices });
});

app.get('/eventos', (req, res) => {
  returnOnConstructionPage(res)
});

app.get('/midias', (req, res) => {
  returnOnConstructionPage(res)
});

app.listen(port, () => {
  console.log(`App is runing on port ${port}`);
});