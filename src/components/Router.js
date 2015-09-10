import React from 'react'
import { connect } from 'react-redux'
import mui from 'material-ui'
import { ROUTE_LOGIN, ROUTE_PROFILE } from '../routes/routes'
import Login from './Login'

let Colors = mui.Styles.Colors;
let ThemeManager = new mui.Styles.ThemeManager();

export default class Router extends React.Component {
  static get childContextTypes() {
    return {
      muiTheme: React.PropTypes.object
    }
  }

  componentWillMount() {
    ThemeManager.setPalette({
      primary1Color: Colors.deepOrange500,
      primary2Color: Colors.grey100,
      primary3Color: Colors.grey100,
      accent1Color: Colors.grey300,
      accent2Color: Colors.grey300,
      accent3Color: Colors.grey300,
      textColor: Colors.grey600,
    });
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    var matcher = this.props.router.matcher;

    // Mount routes to router.matcher
    switch(matcher) {
      case ROUTE_PROFILE:
        return <h1>User Profile</h1>;
      case ROUTE_LOGIN:
      default:
        return <Login />
    }
  }
}

function mapStateToProps(state) {
  return {
    router: state.router
  }
}

export default connect(mapStateToProps)(Router);
