import { Carousel as FlowbiteCarousel, FlowbiteCarouselS } from "flowbite-react";

function Carousel() {
  return (
    <div>
      <FlowbiteCarousel>
        <FlowbiteCarousel.Slide>
          <img src="/src/assets/hero2.jpg" alt="image1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </FlowbiteCarousel.Slide>
        <FlowbiteCarousel.Slide>
          <img src="/src/assets/health.jpg" alt="image2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </FlowbiteCarousel.Slide>
        <FlowbiteCarousel.Slide>
          <img src="/src/assets/home.jpg" alt="image3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </FlowbiteCarousel.Slide>
      </FlowbiteCarousel>
    </div>
  );
}

export default Carousel;