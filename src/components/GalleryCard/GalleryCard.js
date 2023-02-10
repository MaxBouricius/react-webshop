import "./GalleryCard.css";
import getToBeRenderedFigures from "./helpers//galleryCardHelper";

const GalleryCard = (props) => {
    return (
        <article className="galleryCard">
            {getToBeRenderedFigures(props.items)}
        </article>
    )
}

export default GalleryCard;