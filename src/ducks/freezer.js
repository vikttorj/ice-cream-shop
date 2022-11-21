export const actionTypes = {
    UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE'
}

const DEFAULT_STATE = {

}

// ACTIONS //////////////////////////////////////////////
export const actions = {
    updateTemperature(temperature) {
        return {
            type: actionTypes.UPDATE_TEMPERATURE,
        }
    }
}

// REDUCER //////////////////////////////////////////////
export default function reducer(state= DEFAULT_STATE, action) {

}