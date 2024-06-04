import React from 'react';
import ProductSlider from '../components/ProductSlider';

const images = [
  'src/assets/img-1.jpg',
  'src/assets/img-1.jpg',
  'src/assets/img-1.jpg',
  'src/assets/img-1.jpg',
  // Add more image URLs
];

function App() {
  return (
    <div className="App">
      <h1>Product Slider with Zoom</h1>
      <ProductSlider images={images} />
    </div>
  );
}


export default App;
