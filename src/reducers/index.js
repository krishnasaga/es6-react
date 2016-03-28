const initialState = {
  books: {
    status: 'NOT_LOADED',
    list: []
  }
};
export default function booksApp(state = initialState,action){
  if(action.type === 'BOOKS' && action.status === 'LOADING' )
  return Object.assign({},state,{
    books: {status: 'LOADING', list: [] }
  });
  else if(action.type === 'BOOKS' && action.status === 'LOADED')
  return Object.assign({},state,{books: {status: 'LOADED', list: action.list } });

  return state;
}
