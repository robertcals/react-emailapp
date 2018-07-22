import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Inbox from './components/Inbox';
import Message from './components/Message';
import Draft from './components/Draft';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  if ( root ) {
    render(
      <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          <Route path='draft' component={ Draft } />
                    <Route path='inbox' component={ Inbox }>
            <Route path='/inbox/:messageId' component={ Message } />
          </Route>
        </Route>
      </Router>
    , root )
  }
});
