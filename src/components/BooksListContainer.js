import { connect } from 'react-redux'
import BooksList from './BooksList.js'
import { asycLoadBooks } from '../actions/book.js'
const mapStateToProps = (state) => {
  return {
    status: state.books.status,
    list: state.books.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadBooks: () => dispatch(asycLoadBooks())
  }
}

const BooksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList)

export default BooksListContainer
