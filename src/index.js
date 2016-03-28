import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './components/BooksList.js';
import 'whatwg-fetch';
import { booksNotLoaded } from './actions/book.js';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import bookApp from './reducers/index.js'
import { asycLoadBooks } from './actions/book.js'
import BooksListContainer from './components/BooksListContainer.js'
import { Provider } from 'react-redux'
const store = createStore(bookApp,applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
  ReactDOM.render(
      <Provider store={store} ><BooksListContainer /></Provider>,
      document.getElementById('comps')
  );
