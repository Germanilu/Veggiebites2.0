import React from "react";
import {motion} from "framer-motion";
import Slider from "react-slick";
import Image from 'next/image';
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pict1 from '../../../../static/media/img/pict1.jpg'
import pict2 from '../../../../static/media/img/pict2.jpg'
import pict3 from '../../../../static/media/img/pict3.jpg'
import pict4 from '../../../../static/media/img/pict4.jpg'
import pict5 from '../../../../static/media/img/pict5.jpg'
import pict6 from '../../../../static/media/img/pict6.jpg'
import pict7 from '../../../../static/media/img/pict7.jpg'
import pict8 from '../../../../static/media/img/pict8.jpg'

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <motion.div className="slider-container"
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1,y:0},          
      }}
      transition={{delay:1, duration:0.5}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Slider {...settings}>
        <div className="container-div">
        <Image className="img" src={pict1} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
        <div>
        <Image className="img" src={pict2} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
        <div>
        <Image className="img" src={pict3} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
        <div>
        <Image className="img" src={pict4} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
        <div>
        <Image className="img" src={pict5} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
        <div>
        <Image className="img" src={pict6} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
        <div>
        <Image className="img" src={pict7} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
        <div>
        <Image className="img" src={pict8} alt={'veggieBites'} width='100%' height={280}  objectFit="cover" quality={100}  />
        </div>
      </Slider>
    </motion.div>
  );
}

export default Carousel;