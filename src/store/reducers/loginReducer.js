const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return { ...state, ...payload }
    case 'LOGOUT':
      return { ...state, ...payload }
    default:
      return state
  }
}
