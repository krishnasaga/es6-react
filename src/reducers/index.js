const initialState = {
  books: {
    status: 'NOT_LOADED',
    list: []
  }
};
export default function booksApp(state = initialState,action){
  if(action.type === 'BOOKS' && action.status === 'LOADING' )
  return Object.assign({},state,{
    books: {status: 'LOADING'}
  });
  return state;
}
