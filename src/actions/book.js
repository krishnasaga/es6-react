import 'whatwg-fetch';
export function booksLoading(){
  return {
    type: 'BOOKS',
    status: 'LOADING',
    list: []
  }
}

export function booksLoaded(data){
  return {
    type: 'BOOKS',
    status: 'LOADED',
    list: data
  }
}

export function asycLoadBooks(){
  return function(dispatch){

    dispatch(booksLoading());

    fetch('/books.json')
    .then((result) => result.json() )
    .then((data) => dispatch(booksLoaded(data)) );

  }
}
