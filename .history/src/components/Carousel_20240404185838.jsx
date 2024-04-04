import { Carousel } from "flowbite-react";

function MyCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>        
          <img src="/src/assets/hero2.jpg" alt="image1" />        
        
          <img src="/src/assets/health.jpg" alt="image2" />
          
        
          <img src="/src/assets/home.jpg" alt="image3" />
          
        
      </Carousel>
    </div>
  );
}

export default MyCarousel;
