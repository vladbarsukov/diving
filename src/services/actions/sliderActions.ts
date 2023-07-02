export const SET_CURRENT_DOT: "SET_CURRENT_DOT" = "SET_CURRENT_DOT"

export interface ISetCurrentDot {
    readonly type: typeof SET_CURRENT_DOT
    readonly currentDot: number
}

export type TSliderAction = ISetCurrentDot;


