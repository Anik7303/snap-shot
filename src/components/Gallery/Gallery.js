import { useState } from "react";
import { useSelector } from "react-redux";

// styles
import "./Gallery.scss";

// components
import GalleryImage from "./GalleryImage";
import Modal from "../Modal";
import SingleImage from "./SingleImage";

function Gallery(props) {
    const { photos, total, pages } = useSelector((state) => state.unsplash);
    const term = useSelector((state) => state.term);
    const [selected, setSelected] = useState(null);
    console.log({ photos, total, pages, selected });

    const renderPhotos = () => {
        const maxColHeight = photos.reduce((prev, curr) => prev + curr.height, 0);
        const avgColHeight = parseInt(maxColHeight / 3);
        const avgPhotoHeight = parseInt(maxColHeight / photos.length);

        const cols = [[], [], []];
        let curHeight = 0;
        let index = 0;
        for (let photo of photos) {
            const predictedHeight = curHeight + photo.height;
            if (
                predictedHeight > avgColHeight &&
                Math.abs(predictedHeight - avgColHeight) > avgPhotoHeight / 2
            ) {
                curHeight = 0;
                index++;
            }
            if (index >= 3) break;
            curHeight += photo.height;
            cols[index].push(<GalleryImage key={photo.id} image={photo} select={setSelected} />);
        }
        return cols.map((col, index) => <div key={`col-${index}`}>{col}</div>);
    };

    return (
        <>
            {selected && (
                <Modal onClose={() => setSelected(null)}>
                    <SingleImage image={selected} />
                </Modal>
            )}
            <section className="section-gallery">
                {photos.length > 0 ? (
                    <>
                        <h4 className="heading-4 gallery-heading">
                            Showing results for: <span className="search-term">{term}</span>
                        </h4>
                        <div className="gallery">{renderPhotos()}</div>
                    </>
                ) : (
                    <h4 className="heading-4" style={{ textAlign: "center" }}>
                        Please enter a search term
                    </h4>
                )}
            </section>
        </>
    );
}

export default Gallery;
