import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'core/components';
import { store } from 'core/store';

const App = () => {
  return (
    <Provider store={ store }>
      <Root></Root>
    </Provider>
  );
}

export { App };
