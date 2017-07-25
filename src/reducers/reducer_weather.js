import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state] //Equals return.state.concat([action.payload.data]). ES6 shit
            //Cant use .push because in redux you dont mutate state, you need to create a new state 
    }

    return state
}