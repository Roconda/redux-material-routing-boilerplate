import React from 'react';
import Root from './src/containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

React.render(
  <div>
    <Root />
  </div>,
  document.getElementById('root')
);
