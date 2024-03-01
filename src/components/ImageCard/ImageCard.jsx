import css from './ImageCard.module.css';

export default function ImageCard({ card, onSelect }) {
    return (
        <div className={css.wrapper} onClick={() => onSelect(
            true, {
                src: card.urls.regular,
                description: card.alt_description,
        })
        }>
            <img className={css.img} src={card.urls.small} alt={card.alt_description} />
            <div className={css.overlay}>
                <p>Likes: {card.likes}</p>
                <p>Author: {card.user.name}</p>
                <p>Description: {card.description}</p>
            </div>
        </div>
    )
}