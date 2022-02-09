import { applyMiddleware,createStore,compose } from "redux";
import thunk from 'redux-thunk';
import {myReducer }from "./reducer";

const initStore = {
    users:[],
    groups:[]
}

const store = createStore(myReducer,initStore,compose(applyMiddleware(thunk)))

export default store