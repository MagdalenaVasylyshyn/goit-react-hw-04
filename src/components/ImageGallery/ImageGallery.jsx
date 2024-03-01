import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ photos, onSelect }) {
    return (
        <ul className={css.list}>
            {photos.map(photo => (
                <li className={css.item} key={photo.id}>
                    <ImageCard card={photo} onSelect={onSelect}/>
                </li>
            ))}
        </ul>
    )
}