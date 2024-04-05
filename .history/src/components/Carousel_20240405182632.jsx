import { Carousel } from "flowbite-react";

function MyCarousel() {
  return (
    <div className="h-96 sm:h-128 xl:h-1920 2xl:h-240 relative">
      <Carousel slide={false}> 
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white position-relative">
          <img src="/src/assets/hero2.jpg" alt="image1" style={{ objectFit: "contain" }} />
          <div className="absolute inset-0 flex items-center justify-center text-xl text-white ">
            O seu negócio protegido com a melhor equipa de mediação de seguros empresariais de Angola.
          </div>
        </div>       
                 
        <img src="/src/assets/health.jpg" alt="image2" style={{ objectFit: "contain" }} />        
        <img src="/src/assets/home.jpg" alt="image3" style={{ objectFit: "contain" }} />        
      </Carousel>
    </div>
  );
}

export default MyCarousel;
