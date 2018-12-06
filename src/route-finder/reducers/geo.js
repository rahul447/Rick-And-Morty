import { UPDATE_INPUT_DETAILS, RESET_INPUT_DETAILS, SUBMIT_STARTED, SUBMIT_SUCCESS, UPDATE_CURRENT_LOCATION, SUBMIT_FAILURE } from "../actions/index";
import { initialState } from "./initState"

// reducers for different action dispatchers
export default function (state = initialState, action) {
  switch (action.type) {

    case UPDATE_INPUT_DETAILS:
      const start = action.payload.type === 'start' ? action.payload.val : (state.start ? state.start : "")
      const drop = action.payload.type === 'drop' ? action.payload.val : (state.drop ? state.drop : "")

      return {
        ...state,
        start,
        drop
      }

    case RESET_INPUT_DETAILS:
      return action.payload ? { ...state, [action.payload]: "" } : { ...initialState, currLatLong: state.currLatLong }

    case SUBMIT_STARTED:
      return { ...state, submitted: true }

    case SUBMIT_FAILURE:
      return { ...initialState, failure: { message: action.payload, status: true }, success: { status: false }, start: state.start, drop: state.drop, submitted: true, currLatLong: state.currLatLong }

    case SUBMIT_SUCCESS:

      const totalDistance = action.payload.total_distance
      const totalTime = action.payload.total_time
      const startLatLong = action.payload.path[0]
      const dropLatLong = action.payload.path.pop()
      const restLatLong = action.payload.path.reduce((acc, curr, index) => {
        if (index !== 0 && index !== action.payload.path.length - 1) {
          acc.push(curr)
        }
        return acc
      })

      return {
        ...state,
        totalDistance,
        totalTime,
        startLatLong,
        dropLatLong,
        failure: { status: false },
        success: { status: true },
        restLatLong
      }

    case UPDATE_CURRENT_LOCATION:
      let currLatLong = { lat: action.payload.latitude, lng: action.payload.longitude }
      return { ...state, currLatLong }
    default:
      return state
  }
}