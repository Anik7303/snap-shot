import { combineReducers } from "redux";

// reducers
import term from "./term";
import unsplash from "./unsplash";
import error from "./error";

export default combineReducers({
    term,
    unsplash,
    error,
});
