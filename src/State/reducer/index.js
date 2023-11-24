import { combineReducers } from "redux";
import amountReducer from './amountreducers'
const reducers=combineReducers({
    task:amountReducer
})
export default reducers