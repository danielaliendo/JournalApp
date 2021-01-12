import React from 'react';
import ReactDOM from 'react-dom';

import { JournalApp } from './JournalApp';
import './styles/styles.scss'
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
  <HashRouter>
    <JournalApp />
  </HashRouter>,
  document.getElementById('root')
);

