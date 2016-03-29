import React from 'react'
import NavigationBar from './NavigationBar.js'
export default class Header extends React.Component {

  render() {
    return <header className='app-header'>
            <div className='title' >Hello</div>
            <NavigationBar />
          </header>;
  }
}
