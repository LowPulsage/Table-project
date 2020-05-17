import {
  SET_SELECECTED_EXEL,
  SET_SELECTED_WORD,
  SELECT_FOLDER,
  SET_IS_CLICK,
} from 'modules/session/session-constants'

export const sessionInitialState = {
  selectedExcelFileName: '',
  selectedWordFileName: '',
  allDocsFragments: [],
  excelFileNames: [],
  docxFileNames: [],
  type: '',
}

export const sessionReducer = (state = sessionInitialState, action) => {
  switch (action.type) {
  case SELECT_FOLDER: {
    return {
      ...state,
      excelFileNames: action.payload.excelFileNames,
      docxFileNames: action.payload.docxFileNames,
      type: action.payload.type,
    }
  }
  case SET_SELECTED_WORD: {
    return {
      ...state,
      selectedWordFileName: action.payload,
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
      fragmentForSearching: action.payload.replace(/_/g, ' '),
    }
  }
  default:
    return state
  }
}
