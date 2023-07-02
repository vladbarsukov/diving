import {store} from "../../index";
import {ThunkDispatch} from "redux-thunk";
import {TBlogAction} from "../actions/blogActions";


export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TBlogAction;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;