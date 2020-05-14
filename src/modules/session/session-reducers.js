/* eslint-disable */

import { } from './session-constants'
import { UPDATE_TEXT } from './session-actions'
import sourceData from './file'
import excelFileNames from './excel-file-names'
import docxFileNames from './docx-file-names'

const OVERWRITE_DOC_FILE_TEXT = 'OVERWRITE_DOC_FILE_TEXT'

export const sessionInitialState = {
  sourceData,
  // selected: sourceData[0],
  docxFileNames,
  excelFileNames,
}

export const sessionReducer = (state = sessionInitialState, action = {}) => {
  debugger
  // const { type } = action
  switch (action.type) {
    case OVERWRITE_DOC_FILE_TEXT:
      return {
        ...state,
        docxFileNames: [...state, action.docFileText],
      }
    default:
      return state
  }
}

export const updateTextAction = (docFileText) => ({ type: OVERWRITE_DOC_FILE_TEXT, docFileText })
