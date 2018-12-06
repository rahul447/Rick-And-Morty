import * as actions from '../locationInput';
import * as types from '../constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { initialState } from "../../reducers/initState";

jest.setTimeout(10000)
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('sync actions', () => {
    it('should create an action for updateInputDetails', () => {
        const type = 'start', val = 'delhi';

        const expectedAction = {
            type: types.UPDATE_INPUT_DETAILS,
            payload: { type, val }
        }
        expect(actions.updateInputDetails(type, val)).toEqual(expectedAction)
    })

    it('should create an action for resetInputDetails', () => {
        const type = 'start';

        const expectedAction = {
            type: types.RESET_INPUT_DETAILS,
            payload: type
        }
        expect(actions.resetInputDetails(type)).toEqual(expectedAction)
    })

    it('should create an action for submitStarted', () => {
        const expectedAction = {
            type: types.SUBMIT_STARTED
        }
        expect(actions.submitStarted()).toEqual(expectedAction)
    })
})

describe('async actions', () => {
    it('action for submit input details', () => {
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
                [
                    "22.284419",
                    "114.159510"
                ]
            ],
            "total_distance": 20000,
            "total_time": 1800
        }

        fetchMock.postOnce('/route', {
            body: { token: "9d3503e0-7236-4e47-a62f-8b01b5646c16" }
        })
        const expectedActions = [
            { type: types.SUBMIT_STARTED },
            { type: types.SUBMIT_SUCCESS, payload: drivingResults }
        ]
        const store = mockStore(initialState)
        return store.dispatch(actions.submitInputDetails()).then(() => {
            let result = store.getActions()
            result[1].type === "submit_success" && expect(store.getActions()).toEqual(expectedActions)
        })
    })
})