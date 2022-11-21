import { actionTypes, actions } from "../../ducks/freezer";

describe('updateTemperature', () => {
    it('shoud return the right action type', () => {
        const action = actions.updateTemperature();
        expect(action.type).toEqual(actionTypes.UPDATE_TEMPERATURE);
    });

    it('should contain the temperature in the payload', () => {
        const action = actions.updateTemperature(-6);
        expect(action.payload).toEqual(-6);
    })
})