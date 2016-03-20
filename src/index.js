import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './components/BooksList.js';
import 'whatwg-fetch';
import { booksNotLoaded } from './actions/book.js';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import bookApp from './reducers/index.js'
import { asycLoadBooks } from './actions/book.js'

const store = createStore(bookApp,applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(asycLoadBooks());
fetch('./books.json').then(function(response){
  return response.json()
}).then(function(json) {

  ReactDOM.render(
      <BooksList list={json} />,
      document.getElementById('comps')
  );

}).catch(function(ex) {
  console.log('parsing failed', ex)
});
