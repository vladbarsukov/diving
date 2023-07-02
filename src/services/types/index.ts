import {store} from "../../index";
import {ThunkDispatch} from "redux-thunk";
import {TBlogAction} from "../actions/blogActions";
import {TSliderAction} from "../actions/sliderActions";


export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TBlogAction | TSliderAction;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;