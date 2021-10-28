import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res, next) => {

  const html = '<div> Element HTML </div>';

  res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => console.log('Listening on localhost:3000'));