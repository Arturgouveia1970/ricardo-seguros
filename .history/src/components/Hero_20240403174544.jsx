import { Carousel } from "@material-tailwind/react";

function Hero() {
  return (
    <div>
      <Carousel className="">
        <img src={"/src/assets/hero2.jpg"} alt="logo" className="w-full mt-0 p-0" />
      </Carousel>
    </div>
  )
}

export default Hero
