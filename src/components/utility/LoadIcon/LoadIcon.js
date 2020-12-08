// styles
import styles from "./LoadIcon.module.scss";

function LoadIcon(props) {
    const { icon: Icon } = props;
    return (
        <div className={styles.container}>
            <Icon id={styles.icon} />
        </div>
    );
}

export default LoadIcon;
