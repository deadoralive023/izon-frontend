import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.js';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './client.js'

const Root = () => (
  <ApolloProvider client={client}> 
      <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'))
