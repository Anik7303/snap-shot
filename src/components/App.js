// styles
import "./App.scss";

// components
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";

function App(props) {
    console.log({ ...props });

    return (
        <div className="app">
            <Header />
            <main className="main">
                <div className="container">
                    <Gallery />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
