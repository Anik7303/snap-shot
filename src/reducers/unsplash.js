import { FETCH_PHOTOS } from "../actions/types";

const INITIAL_STATE = {
    photos: [],
    pages: 0,
    total: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PHOTOS:
            const { results, total, total_pages } = payload;
            return { ...state, photos: results, pages: total_pages, total };
        default:
            return state;
    }
}
