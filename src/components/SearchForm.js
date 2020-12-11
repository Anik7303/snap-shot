import { useState } from "react";
import { useDispatch } from "react-redux";

// styles
import "./SearchForm.scss";

// material-ui icons
import { Search } from "@material-ui/icons";

// components
import LoadIcon from "./utility/LoadIcon/LoadIcon";
import { fetchPhotos, setTerm as setSearchTerm } from "../actions";

function SearchForm() {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    function onTermSubmit(event) {
        event.preventDefault();

        dispatch(setSearchTerm(term));
        dispatch(fetchPhotos(term));

        setTerm("");
    }

    return (
        <form className="search-form" noValidate>
            <input
                className="search-form__input"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search..."
            />
            <button className="search-form__btn" onClick={onTermSubmit}>
                <LoadIcon icon={Search} />
            </button>
        </form>
    );
}

export default SearchForm;
