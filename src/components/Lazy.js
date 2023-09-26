import React from 'react';
import loadable from '@loadable/component';

export default loader =>
  loadable(loader, {
    fallback: <div>Loading...</div>
  });
