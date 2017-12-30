import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from '../client/components/App'
import SongList from '../client/components/SongList';
import SongCreate from '../client/components/SongCreate';

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" components={App}>
        <IndexRoute components={SongList}/>
        <Route path="songs/new" components={SongCreate}/>
      </Route>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
