/* eslint-disable */
export const OVERWRITE_DOC_FILE_TEXT = 'OVERWRITE_DOC_FILE_TEXT'
export const SET_SELECECTED_EXEL = 'SET_SELECECTED_EXEL'
export const SET_SELECTED_WORD = 'SET_SELECTED_WORD'
export const SELECT_FOLDER = 'SELECT_FOLDER'
export const SET_IS_CLICK = 'SET_IS_CLICK'


// bad place for this transformation
// in actions
const getFragments = r => r.reduce((acc, i) => {
  const fileName = i['Файл 1']
  if (!acc[fileName]) acc[fileName] = []
  acc[fileName].push(i)
  return acc
}, {})

export const sessionInitialState = {
  selectedExcelFileName: '',
  selectedWordFileName: '',
  allDocsFragments: [],
  excelFileNames: [],
  docxFileNames: [],
}

export const sessionReducer = (state = sessionInitialState, action) => {
  switch (action.type) {
    case SELECT_FOLDER: {
      return {
        ...state,
        excelFileNames: action.payload.excelFileNames,
        docxFileNames: action.payload.docxFileNames,
      }
    }
    case SET_SELECTED_WORD: {
      return {
        ...state,
        selectedWordFileName: action.payload
      }
    } 
    case SET_SELECECTED_EXEL: {
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
export const setSelectedExcelName = selectedExcelFileName => {
  const doc = selectedExcelFileName
    ? require(`./metrologiya-files/${selectedExcelFileName}.js`) || {}
    : {}
  const allDocsFragments = getFragments(doc.allRows || [])
  return ({ type: SET_SELECECTED_EXEL, payload: { selectedExcelFileName, allDocsFragments } })
}
export const setFragmentForSearching = payload => ({ type: SET_IS_CLICK, payload })
export const selectFolder = type => {
  if (type === 'metrologiya' || type === 'roskomnadzor') {
    const excel = require(`./excel-file-${type}.js`) || {}
    const doc = require(`./${type}-files.js`) || {}

    return ({ type: SELECT_FOLDER, payload: {
      excelFileNames: excel.default || [],
      docxFileNames: doc.default || [],
    } })
  }
}