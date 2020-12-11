import unsplash from "../apis/unsplash";
import { FETCH_PHOTOS, SET_TERM } from "./types";

export const setTerm = (term) => ({ type: SET_TERM, payload: term });

export const fetchPhotos = (term) => async (dispatch) => {
    const response = await unsplash.get("/search/photos", { params: { query: term } });
    return dispatch({ type: FETCH_PHOTOS, payload: response.data });
};
