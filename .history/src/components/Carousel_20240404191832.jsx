import { Carousel } from "flowbite-react";

function MyCarousel() {
  return (
    <div className="h-full">
      <Carousel pauseOnHover>        
          <img src="/src/assets/hero2.jpg" alt="image1" className="h-96 sm:h-1/2 md:h-screen" />    
        
          <img src="/src/assets/health.jpg" alt="image2" className="h-96 sm:h-1/2 md:h-screen" />         
        
          <img src="/src/assets/home.jpg" alt="image3" className="h-96 sm:h-1/2 md:h-screen" />
          
        
      </Carousel>
    </div>
  );
}

export default MyCarousel;