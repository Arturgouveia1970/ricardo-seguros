s// import { Carousel } from 'flowbite-react';

import { Carousel, CarouselItem } from "flowbite-react";

function Carousell() {
  return (
    <Carousel>
      <CarouselItem>
        <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
          <img src="/src/assets/hero2.jpg" alt="image1" />
          <p>texto1</p>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
          <img src="/src/assets/health.jpg" alt="image2" />
          <p>texto2</p>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="h-full items-center justify-center bg-orange dark:bg-gray-700 dark:text-white">
          <img src="/src/assets/home.jpg" alt="image3" />
          <p>texto3</p>
        </div>
      </CarouselItem>
      <button type="button" className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-slide-to={0}>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-slide-to={2}>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a22 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </span>
export default Carousell;