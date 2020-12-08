import { combineReducers } from "redux";

import unsplash from "./unsplash";
import error from "./error";

export default combineReducers({
    unsplash,
    error,
});
