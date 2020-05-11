import { combineReducers } from 'redux'

import { SESSION_STATE } from 'modules/session/session-constants'
import { sessionReducer } from 'modules/session/session-reducers'

const createReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers,
    source: sessionReducer,
  })

export default createReducer
