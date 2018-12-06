import GeoReducers from "../geo";
import * as types from '../../actions/constants';
import {initialState} from "../initState";

describe('Geo Reducer', () => {
    it('should return the initial state', () => {
        expect(GeoReducers(undefined, {})).toEqual(initialState)
    })

    it('should return the updated input details', () => {
        const type = 'start', val = 'delhi'; 

        const expectedAction = {
            type: types.UPDATE_INPUT_DETAILS,
            payload: {type, val}
        }
        expect(GeoReducers(initialState, expectedAction)).toEqual({
            ...initialState,
            [type]: val,
        })
    })

    it('should reset input details', () => {
        const type = 'start'; 

        const expectedAction = {
            type: types.RESET_INPUT_DETAILS,
            payload: type
        }
        expect(GeoReducers(initialState, expectedAction)).toEqual({...initialState, [type] : ""})
    })

    it('should start submit request', () => {
        const expectedAction = {
            type: types.SUBMIT_STARTED
        }
        expect(GeoReducers(initialState, expectedAction)).toEqual({ ...initialState, submitted: true })
    })

    it('submit success', () => {
        const drivingResults = {
            "path": [
                [
                    "22.372081",
                    "114.107877"
                ],
                [
                    "22.326442",
                    "114.167811"
                ],
                ["22.326442", "114.167811"]
            ],
            "total_distance": 20000,
            "total_time": 1800
        }

        const expectedAction = {
            type: types.SUBMIT_SUCCESS,
            payload: drivingResults
        }

        const totalDistance = drivingResults.total_distance
        const totalTime = drivingResults.total_time
        const startLatLong = drivingResults.path[0]
        const dropLatLong = drivingResults.path.pop()
        const restLatLong = drivingResults.path.reduce((acc, curr, index) => {
            index !== 0 && index !== drivingResults.path.length - 1 ? acc.push(curr) : null
            return acc
        })

        expect(GeoReducers(initialState, expectedAction)).toEqual({
            ...initialState,
            totalDistance,
            totalTime,
            startLatLong,
            dropLatLong,
            failure: {status: false},
            success: {status: true},
            restLatLong
        })
    })
})