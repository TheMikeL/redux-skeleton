import { SET_LOADING, SET_MAIN_NAME,
  // FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_BEGIN,FETCH_PROJECTS_FAILURE,
} from './actionTypes'

//Redux Thunk functions
// export const fetchBegin = () => ({
//   type: FETCH_PROJECTS_BEGIN,
// })

// export const fetchSuccess = projects => ({
//   type: FETCH_PROJECTS_SUCCESS,
//   payload: {projects}
// })

// export const fetchFailure = error => ({
//   type: FETCH_PROJECTS_FAILURE,
//   payload: {error}
// })

export const setMainName = currentState =>({
  type: SET_MAIN_NAME,
  payload: currentState,
})

export const setLoading = loadingState => ({
  type: SET_LOADING,
  loadingState: loadingState,
})