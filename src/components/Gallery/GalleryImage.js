function GalleryImage({ image }) {
    const {
        alt_description,
        description,
        urls: { small },
        height,
        width,
    } = image;
    return (
        <div
            className="gallery__image-container"
            style={{ paddingBottom: `${(100 * height) / width}%` }}
        >
            <img
                className="gallery__image"
                src={small}
                alt={description || alt_description}
                title={height}
            />
        </div>
    );
}

export default GalleryImage;
