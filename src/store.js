import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer, userReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers';

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer
});

let initialState = {
    
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;