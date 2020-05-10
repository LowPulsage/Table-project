import {} from './session-constants'

export const sessionInitialState = {
  user: null,
  token: null,
}

export const sessionReducer = (state = sessionInitialState, action) => {
  const { type } = action

  switch (type) {
  default:
    return state
  }
}
