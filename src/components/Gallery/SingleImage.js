// styles
import "./SingleImage.scss";

// material-ui icons
import { Avatar } from "@material-ui/core";

const SingleImageDetails = (props) => {
    const {
        user: {
            name,
            profile_image: { small: profilePic },
            links: { html: profileLink },
        },
        downloadLink,
    } = props;

    return (
        <div className="single-image__details">
            <div className="single-image__uploader">
                <Avatar src={profilePic} title={name} className="single-image__uploader-image" />
                <a
                    className="single-image__uploader-name"
                    href={profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {name}
                </a>
            </div>
            <a
                className="single-image__cta"
                href={`${downloadLink}?force=true`}
                download
                target="blank"
                rel="noreferrer noopener"
            >
                Downoad
            </a>
        </div>
    );
};

const SingleImage = (props) => {
    const {
        image: {
            alt_description,
            description,
            urls: { regular },
            user,
            links: { download: downloadLink },
            width,
            height,
        },
    } = props;

    return (
        <div className="single-image">
            <div
                className="single-image__container"
                style={{ paddingBottom: `100 * ${height / width}` }}
            >
                <img
                    className="single-image__image"
                    src={regular}
                    alt={description || alt_description}
                />
            </div>
            <SingleImageDetails user={user} downloadLink={downloadLink} />
        </div>
    );
};

export default SingleImage;
