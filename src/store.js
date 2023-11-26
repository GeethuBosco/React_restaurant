import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {restaurantListReducers} from './reducers/restaurantReducers'
const reducers = combineReducers({
restaurantReducer:restaurantListReducers
})

const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store