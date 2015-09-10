import { SET_TITLE, LOGIN } from '../constants/actions'


var initialState = {
  title: 'Login',
  loggedIn: false
}

export default function application(state = initialState, action) {
  switch(action.type) {
    case SET_TITLE:
      return state
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      }

    default:
      return state
  }
}
