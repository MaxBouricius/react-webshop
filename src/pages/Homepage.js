import GalleryCard from "../components/GalleryCard/GalleryCard"
import FilterBar from '../components/FilterBar/FilterBar';
import itemsFromDataFile from "../data/items"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Homepage = (props) => {

  const [items, setItems] = useState([]);
  const [defaultItems, setDefaultItems] = useState([]);

  const onGalleryCardClicked = (collection) => {
    props.onGalleryCardClicked(collection);
  }

  useEffect(() => {
    let i = 0;
    let types = ["whiskey", "wine", "chicken"]
    const galleryCardsToBeRendered = itemsFromDataFile.map(collection => {
      let temp = (
        <Link onClick={() => onGalleryCardClicked(collection)} to={`/product/${types[i]}`}>
          <GalleryCard key={types[i]} type={types[i]} items={collection} />
        </Link>
      )
      i = i + 1;
      return temp;
    });

    setItems(galleryCardsToBeRendered);
    setDefaultItems(galleryCardsToBeRendered)
  }, []);

  const onFilter = (typeToBeFiltered) => {
    const copy = [...defaultItems];
    const cardsToBeRendered = copy.filter(card => {
      if (card.props.type === typeToBeFiltered) {
        return card;
      }
    });
    setItems([cardsToBeRendered])
  }

  return (
    <>
      <FilterBar onFilter={onFilter} ></FilterBar>
      {items}
    </>
  );
}

export default Homepage;