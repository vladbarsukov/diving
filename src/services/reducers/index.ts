import {combineReducers} from "redux";
import {blogReducer} from "./blogReducer";
import {sliderReducer} from "./sliderReduser";

export const rootReducers = combineReducers({
    blogReducer, sliderReducer
})