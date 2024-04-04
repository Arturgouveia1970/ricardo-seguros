import { Carousel } from "flowbite-react";

function MyCarousel() {
  return (
    <div className="h-96 sm:h-128 xl:h-1920 2xl:h-240">
      <Carousel pauseOnHover>        
          <img src="/src/assets/hero2.jpg" alt="image1" />    
        
          <img src="/src/assets/health.jpg" alt="image2" />         
        
          <img src="/src/assets/home.jpg" alt="image3" />
          
        
      </Carousel>
    </div>
  );
}

export default MyCarousel;
