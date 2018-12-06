import React from 'react';
import renderer from 'react-test-renderer';
import LocationInputComponent from '../LocationInput';

describe('LocationInputComponent Test', () => {
    it('render correctly', () => {
        const geo = {
            start: "delhi",
            drop: "agra",
            submitted: true,
            totalDistance: 20000,
            totalTime: 1800,
            failure: {
                status: false
            }
        }
        const updateInputDetails = jest.fn()
        const resetInputDetails = jest.fn()
        const submitInputDetails = jest.fn()

        const tree = renderer.create(<LocationInputComponent geo={geo}
            updateInputDetails={updateInputDetails} resetInputDetails={resetInputDetails}
            submitInputDetails={submitInputDetails} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});