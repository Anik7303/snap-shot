import { Link } from "react-router-dom";

// styles
import "./Header.scss";

// components
import SearchForm from "./SearchForm";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header__brand">
                    <Link to="/" className="header__link">
                        SnapShot
                    </Link>
                </div>
                <div className="header__input">
                    <SearchForm />
                </div>
            </div>
        </header>
    );
}

export default Header;
