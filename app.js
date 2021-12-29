import express from 'express';
import path from 'path';
import template from './src/template';
import ssr from './src/server.entry';
import data from './assets/data.json';

const app = express();
const port = process.env.PORT || 3002;

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

let initialState = {
  isFetching: false,
  apps: data
};

app.get('*', (req, res) => {
  console.log(req.url);
  const { preloadedState, content } = ssr(initialState, req);

  console.log(content, req.url);

  const response = template('Server Rendered Page', preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
