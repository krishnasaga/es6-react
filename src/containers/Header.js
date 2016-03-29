import { connect } from 'react-redux'
import Header from '../components/Header.js'
const mapStateToProps = (state) => {
  return {
    name: ''
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    name: ''
  }
}

const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default AppHeader
