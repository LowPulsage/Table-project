import { } from './session-constants'
import { UPDATE_TEXT } from './session-actions'

export const sessionInitialState = {
  sourceData: [
    { id: 1, message: 'Настоящий Порядок устанавливает правила создания и ведения Федерального информационного фонда по обеспечению единства измерений (далее - Фонд), передачи сведений в него. 1' },
    { id: 2, message: 'Настоящий Порядок устанавливает правила создания и ведения Федерального информационного фонда по обеспечению единства измерений (далее - Фонд), передачи сведений в него. 2' },
    { id: 3, message: 'Настоящий Порядок устанавливает правила создания и ведения Федерального информационного фонда по обеспечению единства измерений (далее - Фонд), передачи сведений в него. 3' },
    { id: 3, message: 'Настоящий Порядок устанавливает правила создания и ведения Федерального информационного фонда по обеспечению единства измерений (далее - Фонд), передачи сведений в него. 4' },
  ],
}

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
