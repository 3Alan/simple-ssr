import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { renderMatches } from 'react-router-dom';

import { ChunkExtractor } from '@loadable/server';

const path = require('path');
const statsFile = path.resolve('./assets/bundle/loadable-stats.json');

module.exports = function render(initialState, matches) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState);

  // publicPath 配置公共路径
  const extractor = new ChunkExtractor({
    statsFile,
    publicPath: '/assets/bundle'
  });

  // render the App store static markup ins content variable
  let content = renderToString(
    extractor.collectChunks(<Provider store={store}>{renderMatches(matches)}</Provider>)
  );
  const scriptTags = extractor.getScriptTags();

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  return { content, preloadedState, scriptTags };
};
