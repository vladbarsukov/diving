import {SET_CURRENT_DOT, TSliderAction} from "../actions/sliderActions";

type TSlideState = {
    currentDot: number;
}

const initialState: TSlideState = {
    currentDot: 1,
};

export const sliderReducer = (state = initialState, action: TSliderAction) => {
    switch (action.type) {
        case SET_CURRENT_DOT: {
            return { ...state, currentDot: action.currentDot }
        }
        default: {
            return state;
        }
    }
};