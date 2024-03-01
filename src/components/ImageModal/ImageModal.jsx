import ReactModal from "react-modal";
import css from './ImageModal.module.css'

ReactModal.setAppElement(document.getElementById('root'));

export default function ImageModal({ isOpen = false, photo, onChange }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => onChange(false)}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            preventScroll={true}
            className={css.modal}
            overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : '' }`}
        >
            <img src={photo.src} className={css.img} />
            <p className={css.text}>{photo.description}</p>

        </ReactModal>
    )
}