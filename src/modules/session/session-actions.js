import {
  SET_SELECECTED_EXEL,
  SET_SELECTED_WORD,
  SELECT_FOLDER,
  SET_IS_CLICK,
} from 'modules/session/session-constants'

const getFragments = r => r.reduce((acc, i) => {
  const fileName = i['Файл 1']
  if (!acc[fileName]) acc[fileName] = []
  acc[fileName].push(i)
  return acc
}, {})

export const setSelectedWordName = payload => ({ type: SET_SELECTED_WORD, payload })

export const setSelectedExcelName = selectedExcelFileName => {
  return (dispatch, getState) => {
    const type = getState().source.type
    if (type) {
      const doc = selectedExcelFileName
        ? require(`./${type}-files/${selectedExcelFileName}.js`) || {}
        : {}
      const allDocsFragments = getFragments(doc.allRows || [])
      dispatch({ type: SET_SELECECTED_EXEL, payload: { selectedExcelFileName, allDocsFragments } })
    }
  }
}

export const setFragmentForSearching = payload => ({ type: SET_IS_CLICK, payload })

export const selectFolder = type => {
  if (type === 'metrologiya' || type === 'roskomnadzor') {
    const excel = require(`./excel-file-${type}.js`) || {}
    const doc = require(`./${type}-files.js`) || {}

    return ({
      type: SELECT_FOLDER,
      payload: {
        excelFileNames: excel.default || [],
        docxFileNames: doc.default || [],
        type,
      },
    })
  }
}
