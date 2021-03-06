import { FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT } from '../actions/types';

const INITIAL_STATE = {
    rentals: {
        data: []
    }, 
    rental: {
        data: {}
    }
}

export const rentalReducer = (state = INITIAL_STATE.rentals, action) => {
    switch (action.type) {
        case FETCH_RENTALS:
            return { ...state, data: action.rentals }
        default:
            return state;
    }
}

export const rentalDetailReducer = (state = INITIAL_STATE.rental, action) => {
    switch(action.type) {
        case FETCH_RENTAL_BY_ID_SUCCESS: 
            return Object.assign({}, state, {data: action.rental});
        case FETCH_RENTAL_BY_ID_INIT:
            return Object.assign({}, state, {data: {}});    
        default: 
            return state;
    }
}
