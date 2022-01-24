import express from 'express';
import path from 'path';
import template from './template';
import ssr from '../server.entry';
import data from '../../assets/data.json';
import { logger } from './logger';
import { matchRoutes } from 'react-router-dom';
import routes from '../routes';

const app = express();
const port = process.env.PORT || 3030;

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, '../../assets')));
app.use('/media', express.static(path.resolve(__dirname, '../../media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});

let initialState = {
  isFetching: false,
  apps: data
};

app.all('/log.gif', (req, res) => {
  logger.info(`client log from action: ${req.query.action}`);
  res.send('');
});

app.get('/favicon.ico', (req, res) => {
  res.send('');
});

app.get('*', (req, res) => {
  logger.info(`node log: ${req.url}`);

  const matchedComponent = matchRoutes(routes, req.url);
  let reduxState = initialState;

  if (matchedComponent) {
    const { getServerSideProps } = matchedComponent[0].route.element.type;
    if (getServerSideProps) {
      const res = getServerSideProps();
      reduxState = { ...reduxState, ...res };
    }
  }

  const { preloadedState, content } = ssr(reduxState, matchedComponent);

  const response = template(preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
