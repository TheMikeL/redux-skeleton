import { SET_LOADING, SET_MAIN_NAME } from './actionTypes'

export const setMainName = currentState =>({
  type: SET_MAIN_NAME,
  payload: currentState,
})

export const setLoading = loadingState => ({
  type: SET_LOADING,
  loadingState: loadingState,
})