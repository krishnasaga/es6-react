export function booksLoading(){
  return {
    type: 'BOOKS',
    status: 'LOADING',
    list: []
  }
}

export function booksLoaded(){
  return {
    type: 'BOOKS',
    status: 'LOADED',
    list: []
  }
}

export function asycLoadBooks(){
  return function(dispatch){
            dispatch(booksLoading());
    setTimeout(()=> {
      return dispatch(booksLoaded());
    },1000);
  }
}
