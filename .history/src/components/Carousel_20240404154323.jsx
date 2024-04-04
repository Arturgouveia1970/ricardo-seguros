// https://www.npmjs.com/package/react-responsive-carousel
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;
// import Carousel from 'react-responsive-carousel';

// const Carousel = () => {
//   return (
//       <Carousel showArrows={true} >
//           <div>
//               <img src={"/src/assets/hero2.jpg"} />
//               <p className="legend">Legend 1</p>
//           </div>
//           <div>
//               <img src={"/src/assets/health.jpg"} />
//               <p className="legend">Legend 2</p>
//           </div>
//           <div>
//               <img  src={"/src/assets/home.jpg"} />
//               <p className="legend">Legend 3</p>
//           </div>
//       </Carousel>
//   );
// };

// export default Carousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls

import { Carousel } from "flowbite-react";

export default function Carousell() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('')}>
        <img src={"/src/assets/hero2.jpg"} alt="image1" />
        <img src={"/src/assets/health.jpg"} alt="image2" />
        <img src={"/src/assets/home.jpg"} alt="image3" />
        
      </Carousel>
    </div>
  );
}