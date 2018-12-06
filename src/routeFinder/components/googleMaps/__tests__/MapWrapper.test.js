import React from 'react';
import renderer from 'react-test-renderer';
import MapWrapperComponent from '../mapWrapper';

describe('MapWrapperComponent Test', () => {
    it('render correctly', () => {
        const geo = {
            startLatLong: [
                "22.372081",
                "114.107877"
            ],
            dropLatLong: [
                "22.284419",
                "114.159510"
            ],
            currLatLong: {
                lat: "29.6512",
                lng: "-82.3426"
            }
        }
        const defaultZoom = 10
        const tree = renderer.create(<MapWrapperComponent defaultZoom={defaultZoom}
            geo={geo} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});