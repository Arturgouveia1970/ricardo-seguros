import { Carousel } from "@material-tailwind/react";

function Hero() {
  return (
    <div>
      <Carousel className="">
        <img src={"/src/assets/hero2.jpg"} alt="imagem-1" className="h-full w-full object-cover" />
        <img src={"/src/assets/health.jpg"} alt="imagem-1" className="h-full w-full object-cover" />
        <img src={"/src/assets/.jpg"} alt="imagem-1" className="h-full w-full object-cover" />
      </Carousel>
    </div>
  )
}

export default Hero
