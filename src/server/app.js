import express from 'express';
import path from 'path';
import template from './template';
import ssr from '../server.entry';
import { logger } from './logger';
import { matchRoutes } from 'react-router-dom';
import routes from '../routes';

const app = express();
const port = process.env.PORT || 3033;

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, '../../assets')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});

let initialState = {};

app.all('/log.gif', (req, res) => {
  logger.info(`client log: ${req.query.action}`);
  res.send('');
});

app.get('/favicon.ico', (req, res) => {
  res.send('');
});

app.get('*', (req, res) => {
  logger.info(`node log: ${req.url}`);

  const matchedComponent = matchRoutes(routes, req.url);
  if (matchedComponent) {
    const { getServerSideProps } = matchedComponent[0].route.element.type;
    if (getServerSideProps) {
      const res = getServerSideProps();
      initialState = { ...initialState, ...res };
    }
  }

  const { preloadedState, content } = ssr(initialState, matchedComponent);

  const response = template(preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
