import { Carousel } from "@material-tailwind/react";

function Hero() {
  return (
    <div>
      <Carousel className="">
        <img src={"/src/assets/hero2.jpg"} alt="logo" className="h-full w-full object-cover" />
      </Carousel>
    </div>
  )
}

export default Hero
