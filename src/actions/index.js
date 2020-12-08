import unsplash from "../apis/unsplash";
import { FETCH_PHOTOS } from "./types";

export const fetchPhotos = (term) => async (dispatch) => {
    const response = await unsplash.get("/search/photos", { params: { query: term } });
    return dispatch({ type: FETCH_PHOTOS, payload: response.data });
};
