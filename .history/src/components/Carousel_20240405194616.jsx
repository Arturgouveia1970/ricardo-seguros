import { Carousel } from "flowbite-react";

function MyCarousel() {
  return (
    <div className="h-96 sm:h-128 xl:h-1920 2xl:h-240 relative">
      <Carousel slide={false}> 
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white position-relative">
          <img src="/src/assets/hero2.jpg" alt="image1" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              O seu negócio protegido com a melhor equipa de mediação de seguros empresariais de Angola.
            </div>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white position-relative">
          <img src="/src/assets/health.jpg" alt="image1" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              A Saúde da sua família em primeiro Lugar
            </div>
          </div>
        </div>  

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white position-relative">
          <img src="/src/assets/home.jpg" alt="image1" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              A Segurança da sua fam
            </div>
          </div>
        </div>   
                 
        
          
        <img src="/src/assets/home.jpg" alt="image3" className="object-cover w-full h-full" />        
      </Carousel>
    </div>
  );
}

export default MyCarousel;