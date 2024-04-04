import { Carousel } from "flowbite-react";

function Carousell() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log("onSliChange()", index)}>
        
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
    </div>
  );
}

export default Carousell;
