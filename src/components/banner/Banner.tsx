"use client";
import Image, { StaticImageData } from "next/image";
import '@/styles/banner.css';
import banner from "../../assets/banner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

interface CustomDotProps {
    onClick?: () => void;
    active?: boolean;
}

interface SlickSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    autoplay: boolean;
    autoplaySpeed: number;
    slidesToShow: number;
    slidesToScroll: number;
    appendDots: (dots: React.ReactNode) => React.ReactElement;
    customPaging: (i: number) => React.ReactElement;
}

interface INFTDropCalendar {
    id: number;
    image: StaticImageData;
  }


export const Banner = () => {
    const listItem: INFTDropCalendar[] = [
        {
            id: 1,
            image: banner,
          },
          {
            id: 2,
            image: banner,
          },
    ];

    const CustomDots = (dots: React.ReactNode): React.ReactElement => (
        <div className="custom-dots-container">
          {dots}
        </div>
      );
    
      const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => (
        <div 
          className={`custom-dot ${active ? 'active' : ''}`}
          onClick={onClick}
        />
      );

    const settings: SlickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots: React.ReactNode) => CustomDots(dots),
        customPaging: (i: number) => <CustomDot/>
    };
    return (
        <section className="banner__container">
            <Slider {...settings}>
                {listItem?.map((itm) => {
                    return (
                        <div key={itm?.id} className="banner__item">
                            <Image className='w-full' src={itm?.image} alt="banner"/>
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}