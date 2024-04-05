import { Carousel } from "flowbite-react";

function MyCarousel() {
  return (
    <div className="h-96 sm:h-128 xl:h-1920 2xl:h-240">
      <Carousel slide={false}> 
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={hero1} alt="image1" style={{ objectFit: "contain" }} />
          O seu negócio protegido com a melhor equipa de mediação de seguros empresariais de Angola.
        </div>       
                 
        <img src="/src/assets/health.jpg" alt="image2" style={{ objectFit: "contain" }} />        
        <img src="/src/assets/home.jpg" alt="image3" style={{ objectFit: "contain" }} />        
      </Carousel>
    </div>
  );
}

export default MyCarousel;