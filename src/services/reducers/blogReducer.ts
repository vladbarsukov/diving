import {GET_BLOG_FAILED, GET_BLOG_REQUEST, GET_BLOG_SUCCESS, TBlogAction} from "../actions/blogActions";
import {IBlog} from "../types/data";

type TBlogState = {
    blog: Array<IBlog>;
    blogRequest: boolean;
    blogFailed: boolean;
}

const initialState: TBlogState = {
    blog: [],
    blogRequest: false,
    blogFailed: false,
};

export const blogReducer = (state = initialState, action: TBlogAction) => {
    switch (action.type) {
        case GET_BLOG_REQUEST: {
            return {
                ...state,
                blogRequest: true
            };
        }
        case GET_BLOG_SUCCESS: {
            return { ...state, blogFailed: false, blog: action.blog, blogRequest: false };
        }
        case GET_BLOG_FAILED: {
            return { ...state, blogFailed: true, blogRequest: false };
        }
        default: {
            return state;
        }
    }
};