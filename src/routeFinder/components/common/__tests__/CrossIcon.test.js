import React from 'react';
import renderer from 'react-test-renderer';
import CrossComponent from '../crossIcon';


describe('CrossComponent Test', () => {
    it('render correctly', () => {
        const inputType = "start";
        const resetInputDetails = jest.fn()

        const tree = renderer.create(<CrossComponent inputType={inputType}
            resetInputDetails={resetInputDetails} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});