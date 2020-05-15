/* eslint-disable */

import { } from './session-constants'
import { UPDATE_TEXT } from './session-actions'
import sourceData from './file'
import excelFileNames from './excel-file-names'
import docxFileNames from './docx-file-names'

export const OVERWRITE_DOC_FILE_TEXT = 'OVERWRITE_DOC_FILE_TEXT'
export const SET_SELECTED_WORD = 'SET_SELECTED_WORD'
export const SET_SELECECTED_EXEL = 'SET_SELECECTED_EXEL'
export const SET_IS_CLICK = 'SET_IS_CLICK'

export const sessionInitialState = {
  sourceData,
  // selected: sourceData[0],
  docxFileNames,
  excelFileNames,
  selectedWordFileName: null,
  selectedExcelFileName: null,
  isClick: false
}

export const sessionReducer = (state = sessionInitialState, action) => {


  switch (action.type) {
    // case OVERWRITE_DOC_FILE_TEXT:
    //   return {
    //     ...state,
    //     docxFileNames: [...state.docxFileNames, action.docFileText],
    //   }
    case SET_SELECTED_WORD: {
      return {
        ...state,
        selectedWordFileName: action.payload
      }
    } case SET_SELECECTED_EXEL: {
      return {
        ...state,
        selectedExcelFileName: action.payload
      }
    }
    case SET_IS_CLICK: {
      return {
        ...state,
        isClick: action.payload
      }
    }
    default:
      return state
  }
}

export const setSelectedWordName = payload => ({ type: SET_SELECTED_WORD, payload })
export const setSelectedExelName = payload => ({ type: SET_SELECECTED_EXEL, payload })
export const setIsClick = payload => ({ type: SET_IS_CLICK, payload })