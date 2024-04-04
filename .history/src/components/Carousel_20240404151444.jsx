// https://www.npmjs.com/package/react-responsive-carousel
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

const Carousell = () => {
        return (
            <Carousell showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src={"/src/assets/hero2.jpg"} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={"/src/assets/health.jpg"} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img  src={"/src/assets/home.jpg"} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousell>
        );
    };

    export default Carousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls