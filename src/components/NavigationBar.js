import React from 'react'
export default class NavigationBar extends React.Component {

  render() {
    return (
      <nav className='app-nav'>
        <ul>
        <li><a className='title' >Hello React and Redux</a></li>
        <li><a className='link' >Books</a></li>
        <li><a className='link' >Rover</a></li>
        </ul>
      </nav>
    );
  }
}
