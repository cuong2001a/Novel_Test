"use client";
import Image, { StaticImageData } from 'next/image';
import "@/styles/nFTCollection.css";
import nftDrop from '../../assets/nft_drop_calendar/nft_drop_1.png';
import leftIcon from '../../assets/icon_left.png';
import rightIcon from '../../assets/icon_right.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';

interface ArrowProps {
    click: () => void;
 }


interface INFTDropCalendar {
    id: number;
    image: StaticImageData;
  }

interface SlickSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    responsive: Array<{
        breakpoint: number;
        settings: {
        slidesToShow: number;
        }
    }>;
}
 
export const NFTDropCalendar: React.FC<{}> = () => {
    const sliderRef = useRef<Slider | null>(null);

    const listItem: INFTDropCalendar[] = [
        {
            id: 1,
            image: nftDrop,
          },
          {
            id: 2,
            image: nftDrop,
          },
    ]
    const PrevArrow: React.FC<ArrowProps> = (props) => {
        const { click} = props;
        return (
            <div className="custom-arrow" onClick={click}>
                <Image src={leftIcon} alt=""/>
            </div>
        )
      }
      const NextArrow: React.FC<ArrowProps> = (props) => {
        const { click } = props;
        return (
            <div className="custom-arrow" onClick={click}>
                <Image src={rightIcon} alt=""/>
            </div>
        )
      }


      const goPrev = (): void => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      };
    
      const goNext = (): void => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      };

      const settings: SlickSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };
    return (
        <section className='card__nft-drop-calendar w-full'>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-[#FFC700] md:text-[32px] text-2xl uppercase italic font-bold">NFT Drops Calendar</h2>
                <div className='flex gap-2'>
                    <PrevArrow click={goPrev}/>
                    <NextArrow click={goNext}/>
                </div>
            </div>
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    {listItem.map((nft) => (
                        <div key={nft.id} className="nft-card">
                            <div className="nft-image-container">
                               <Image className='w-full h-[241px]' src={nft.image} alt=''/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}