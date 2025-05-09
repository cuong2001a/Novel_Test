"use client";
import Image, { StaticImageData } from 'next/image';
import "@/styles/nFTCollection.css";
import collection1 from '../../assets/nft_collection/nft.png';
import collection2 from '../../assets/nft_collection/nft_1.png';
import collection3 from '../../assets/nft_collection/nft_2.png';
import collection4 from '../../assets/nft_collection/nft_3.png';
import collection5 from '../../assets/nft_collection/nft_4.png';
import collection6 from '../../assets/nft_collection/nft_5.png';
import leftIcon from '../../assets/icon_left.png';
import rightIcon from '../../assets/icon_right.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';

interface INFTCollection {
    id: number;
    image: StaticImageData;
  }

interface ArrowProps {
   click: () => void;
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
export const NFTCollection = () => {
    const sliderRef = useRef<Slider | null>(null);
    const nftCollections: INFTCollection[] = [
        {
          id: 1,
          image: collection1,
        },
        {
          id: 2,
          image: collection2,
        },
        {
          id: 3,
          image: collection3,
        },
        {
          id: 4,
          image: collection4,
        },
        {
          id: 5,
          image: collection5,
        },
        {
          id: 6,
          image: collection6,
        }
      ];

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
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      };
    return (
        <section className="card__ntf-collection container mx-auto max-w-[1128px] md:mt-20 mt-10 px-5 md:px-0">
          <div className='flex justify-between items-center'>
          <h2 className="text-[#FFC700] md:text-[32px] text-2xl italic uppercase font-black">New NFT Collections</h2>
          <div className='flex gap-2'>
            <PrevArrow click={goPrev}/>
            <NextArrow click={goNext}/>
          </div>
          </div>
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    {nftCollections.map((nft) => (
                        <div key={nft.id} className="nft-card">
                            <div className="nft-image-container">
                               <Image className='w-full md:h-[246px]' src={nft.image} alt=''/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
