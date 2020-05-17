/* eslint-disable */

import { } from './session-constants'
// import { UPDATE_TEXT } from './session-actions'
import excelFileNames from './excel-file-metrologiya'
import docxFileNames from './metrologiya-files'

export const OVERWRITE_DOC_FILE_TEXT = 'OVERWRITE_DOC_FILE_TEXT'
export const SET_SELECTED_WORD = 'SET_SELECTED_WORD'
export const SET_SELECECTED_EXEL = 'SET_SELECECTED_EXEL'
export const SET_IS_CLICK = 'SET_IS_CLICK'


// bad place for this transformation
const getFragments = r => r.reduce((acc, i) => {
  const fileName = i['Файл 1']
  if (!acc[fileName]) acc[fileName] = []
  acc[fileName].push(i)
  return acc
}, {})

export const sessionInitialState = {
  allDocsFragments: [],
  docxFileNames,
  excelFileNames,
  selectedWordFileName: null,
  selectedExcelFileName: null,
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
        selectedExcelFileName: action.payload.selectedExcelFileName,
        allDocsFragments: action.payload.allDocsFragments,
      }
    }
    case SET_IS_CLICK: {
      return {
        ...state,
        fragmentForSearching: action.payload.replace(/_/g, ' ')
      }
    }
    default:
      return state
  }
}

// should be moved to session-actions
export const setSelectedWordName = payload => ({ type: SET_SELECTED_WORD, payload })
export const setSelectedExelName = selectedExcelFileName => {
  const doc = require(`./metrologiya-files/${selectedExcelFileName}.js`) || {}
  const allDocsFragments = getFragments(doc.allRows || [])
  return ({ type: SET_SELECECTED_EXEL, payload: { selectedExcelFileName, allDocsFragments } })
}
export const setFragmentForSearching = payload => ({ type: SET_IS_CLICK, payload })