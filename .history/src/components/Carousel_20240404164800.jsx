import { Carousel } from 'flowbite-react';

function Carousell() {
  return (
    <Carousel slide={false}>
      <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
        <img src={"/src/assets/hero2.jpg"} alt="image1" />
        
      </div>
      <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
        <img src={"/src/assets/health.jpg"} alt="image2" />
        
      </div>
      <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
        <img src={"/src/assets/home.jpg"} alt="image3" />
        <p>texto3</p>
      </div>
    </Carousel>
  );
}

export default Carousell;