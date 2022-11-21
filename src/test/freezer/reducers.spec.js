import reducer ,{ actions } from '../../ducks/freezer';
import * as flavors from '../../constants/icecreams_flavors'

describe('Freezer reducer', () => {
    it('should store the temperature in the state', () => {
        const newState = reducer(undefined, actions.updateTemperature(-6));
        expect(newState.temperature).toEqual(-6);
    });

    it('should store the icecream in the state', () => {
        const newState = reducer(undefined, actions.addIceCream(flavors.FABADA, 33))
        expect(newState.icecreams[flavors.FABADA]).toEqual(33);
    })
})