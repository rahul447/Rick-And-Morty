import { UPDATE_INPUT_DETAILS, RESET_INPUT_DETAILS, SUBMIT_STARTED, SUBMIT_SUCCESS, SUBMIT_FAILURE, UPDATE_CURRENT_LOCATION } from "./constants"
import { submitPickUpDrop, drivingRouteCall } from "../services/index"

// update start drop action creator
export const updateInputDetails = (type, val) => ({
    type: UPDATE_INPUT_DETAILS,
    payload: { type, val }
});

// reset action creator
export const resetInputDetails = (type = "") => ({
    type: RESET_INPUT_DETAILS,
    payload: type
});

// submit started action creator
export const submitStarted = () => ({
    type: SUBMIT_STARTED
});

// submit success action creator
export const submitSuccess = (drivingResults) => ({
    type: SUBMIT_SUCCESS,
    payload: drivingResults
});

// submit failure action creator
export const submitFailure = (err) => ({
    type: SUBMIT_FAILURE,
    payload: err
});

// update current lat long action creator
export const updateCurrentLocation = (currLatLongObj) => ({
    type: UPDATE_CURRENT_LOCATION,
    payload: currLatLongObj
});

// submit action creator (has side effects)
export const submitInputDetails = (start, drop) => {
    return async dispatch => {
        dispatch(submitStarted());
        try {
            let { token } = await submitPickUpDrop();
            // now this api is trying til status !== "in progress". We can limit this by adding a flag
            do {
                var { status, ...drivingResults } = await drivingRouteCall(token)
            } while (status === "in progress");

            status === 'failure' ? dispatch(submitFailure(drivingResults.error)) :
                dispatch(submitSuccess(drivingResults));

        } catch (err) {
            dispatch(submitFailure(err))
        }
    };
}

