
import * as FLAVORS from '../constants/icecreams_flavors'
import * as AMOUNTS from '../constants/default_amount'

export const actionTypes = {
    UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE',
    ADD_ICECREAM: 'ADD_ICECREAM'
}

const DEFAULT_STATE = {
    temperature: 0,
    icecreams: {
        [FLAVORS.CHOCOLATE]: 10,
        [FLAVORS.VANILLA]: 20,
    }
}

// ACTIONS //////////////////////////////////////////////
export const actions = {
    updateTemperature(temperature) {
        return {
            type: actionTypes.UPDATE_TEMPERATURE,
            payload: temperature
        }
    },
    addIceCream(flavor, amount = AMOUNTS.DEFAULT_ICECREAM_AMOUNT) {
        return {
            type: actionTypes.ADD_ICECREAM,
            payload: {
                flavor,
                amount,
            }
        }
    }
}

// REDUCER //////////////////////////////////////////////
export default function reducer(state= DEFAULT_STATE, action) {
    switch(action.type) {
        case actionTypes.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: action.payload
            }
        case actionTypes.ADD_ICECREAM:
            const newAmount = action.payload.amount + (state.icecreams[action.payload.flavor] || 0)
            return {
                ...state,
                icecreams: {
                    ...state.icecreams,
                    [action.payload.flavor]: Math.min(newAmount, AMOUNTS.MAX_AMOUNT_PER_ICECREAM)
                }
            }
        default:
            return state;
    }
}