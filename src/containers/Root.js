import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { navigate, replace } from 'redux-routing'

import Router from '../components/Router'
import reducers from '../reducers'
import { middleware, router } from '../routes'
import { ROUTE_LOGIN, ROUTE_PREFERENCE } from '../routes/routes'

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, middleware),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)
const store = createStoreWithMiddleware(reducers)

var state = store.getState()
var dispatchPath = (state.application.loggedIn) ? ROUTE_PREFERENCE : ROUTE_LOGIN;
store.dispatch(replace({ pathname: dispatchPath }))


export default class Root extends React.Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          { () => <Router /> }
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    )
  }
}
