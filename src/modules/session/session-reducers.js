import { } from './session-constants'
import { UPDATE_TEXT } from './session-actions'
import sourceData from './file'

export const sessionInitialState = {
  sourceData,
  selected: sourceData[0],
}
/* eslint-disable */
export const sessionReducer = (state = sessionInitialState, action = {}) => {
  // const { type } = action
  switch (action.type) {
    // case UPDATE_TEXT:
    //   return {
    //     ...state,
    //     sourceData: [...state, action.textData],
    //   }
    default:
      return state
  }
}

export const updateTextAction = () => ({ type: UPDATE_TEXT })
