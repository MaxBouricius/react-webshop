import './App.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage';
import Productpage from '../pages/Productpage'
import { useState } from 'react';
const App = () => {

  const [collectionFromProductPage, setCollectionFromProductPage] = useState([]);
  const onGalleryCardClicked = (collection) => {
    setCollectionFromProductPage(collection)
    
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked}/>}></Route>
        <Route path="/product/:type" element={<Productpage collection={collectionFromProductPage} />}></Route>
      </Routes>
    </>
  );
}

export default App;