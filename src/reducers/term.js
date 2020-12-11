import { SET_TERM } from "../actions/types";

export default function reducer(state = "", action) {
    switch (action.type) {
        case SET_TERM:
            return action.payload;
        default:
            return state;
    }
}
