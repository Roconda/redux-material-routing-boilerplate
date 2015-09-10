import { LOGIN } from '../constants/actions'
import { ROUTE_PROFILE } from '../routes/routes'
import { navigate } from 'redux-routing'

export function setLoginState(user, password) {
  return {
    type: LOGIN,
    user,
    password
  }
}

export function login(user, password) {
  return (dispatch, getState) => {
    dispatch(setLoginState(user, password))
    dispatch(navigate({ pathname: ROUTE_PROFILE }))
  }
}
