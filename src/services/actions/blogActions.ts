import {AppDispatch} from "../types";
import {getBlogRequest} from "../../utils/api";
import {IBlog} from "../types/data";

export const GET_BLOG_REQUEST: "GET_BLOG_REQUEST" = "GET_BLOG_REQUEST"
export const GET_BLOG_SUCCESS: "GET_BLOG_SUCCESS" = "GET_BLOG_SUCCESS"
export const GET_BLOG_FAILED: "GET_BLOG_FAILED" = "GET_BLOG_FAILED"

export interface IGetBlogRequest {
    readonly type: typeof GET_BLOG_REQUEST
}


export interface IGetBlogSuccess {
    readonly type: typeof GET_BLOG_SUCCESS
    readonly blog: Array<IBlog>
}

export interface IGetBlogFailed {
    readonly type: typeof GET_BLOG_FAILED
}

export type TBlogAction = IGetBlogRequest | IGetBlogSuccess | IGetBlogFailed;

export const getBlog = () =>
    (dispatch: AppDispatch) =>{
        dispatch({
            type: GET_BLOG_REQUEST
        });
        getBlogRequest()
            .then(res => {
                dispatch({
                    type: GET_BLOG_SUCCESS,
                    blog: res.data.data
                });
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: GET_BLOG_FAILED
                });
            })
    };
