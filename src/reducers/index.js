import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { rentalReducer, rentalDetailReducer } from './rentals-reducer';
import thunk from 'redux-thunk';


export const init = () => {
    const reducer = combineReducers({
        rentals: rentalReducer,
        rental: rentalDetailReducer,
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}