import { Carousel } from 'flowbite-react';
import { useState } from 'react';

function Carousell() {
  return (
    <Carousel
      activeIndex={0}
      onSlideChange={(index) => console.log(`Slide changed to ${index}`)}
    >
      <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
        <img src={"/src/assets/hero2.jpg"} alt="image1" />
        <p>texto1</p>
      </div>
      <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
        <img src={"/src/assets/health.jpg"} alt="image2" />
        <p>texto2</p>
      </div>
      <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
        <img src={"/src/assets/home.jpg"} alt="image3" />
        <p>texto3</p>
      </div>
    </Carousel>
  );
}

export default Carousell;