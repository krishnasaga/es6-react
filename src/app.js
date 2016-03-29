import React from 'react'
import AppHeader from './containers/Header.js'
import BooksListContainer from './components/BooksListContainer.js'

export default class App extends React.Component {

  render() {
    return <div>
            <AppHeader />
            <BooksListContainer />
          </div>;
  }
}
