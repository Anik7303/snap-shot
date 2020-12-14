function GalleryImage(props) {
    const {
        image: {
            alt_description,
            description,
            urls: { small },
            height,
            width,
        },
        select,
    } = props;

    return (
        <div
            className="gallery__image-container"
            style={{ paddingBottom: `${(100 * height) / width}%` }}
        >
            <img
                className="gallery__image"
                src={small}
                alt={description || alt_description}
                onClick={() => select(props.image)}
            />
        </div>
    );
}

export default GalleryImage;
