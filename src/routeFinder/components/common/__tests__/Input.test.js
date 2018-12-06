import React from 'react';
import renderer from 'react-test-renderer';
import InputComponent from '../input';

describe('InputComponent Test', () => {
    it('render correctly', () => {
        const labelName = "Enter Start Location"
        const input = "start"
        const inputVal = "delhi"
        const placeholder = "Enter Start Location"
        const updateInputDetails = jest.fn()

        const tree = renderer.create(<InputComponent labelName={labelName} input={input} 
            inputVal={inputVal} placeholder={placeholder} updateInputDetails={updateInputDetails}/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});