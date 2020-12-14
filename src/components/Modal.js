import ReactDOM from "react-dom";

// styles
import "./Modal.scss";

const Modal = (props) => {
    const { title, children, onClose } = props;
    const modalElement = (
        <>
            <div className="backdrop" onClick={onClose}></div>
            <section className="modal">
                <div className="modal__head">
                    <span className="modal__close" onClick={onClose}>
                        X
                    </span>
                    {title && <h4 className="heading-4 modal__heading">{title}</h4>}
                </div>
                <div className="modal__content">{children}</div>
            </section>
        </>
    );

    return ReactDOM.createPortal(modalElement, document.getElementById("modal"));
};

export default Modal;
