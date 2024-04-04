import { Carousel, Typography, Button } from "@material-tailwind/react";

function Hero() {
  return (
    <div>
      <Carousel className="rounded-xl">
        <div className="relative h-full w-full">
        <img src={"/src/assets/hero2.jpg"} alt="imagem-1" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            
          </div>
          <img src={"/src/assets/health.jpg"} alt="imagem-2" className="h-full w-full object-cover" />
          <img src={"/src/assets/home.jpg"} alt="imagem-3" className="h-full w-full object-cover" />
        </div>
          
      </Carousel>
    </div>
  )
}

export default Hero
