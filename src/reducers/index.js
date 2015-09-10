import { combineReducers } from 'redux'
import application from './reducers'
import { reducer } from 'redux-routing'


const reducers = combineReducers({ application, router: reducer })

export default reducers
