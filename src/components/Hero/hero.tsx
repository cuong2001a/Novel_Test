import Link from 'next/link';
import Image from 'next/image';
import Horse from '../../assets/horse.png';
import New from '../../assets/new_v2.png';
import Ranking from '../../assets/ranking.png';
import Video from '../../assets/video.png';
import Plane from '../../assets/plane.png';
import FreeToEarn from '../../assets/free_to_earn.png';

export const Hero = () => {
    const features = [
        { 
          title: "FREE TO EARN", 
          icon: FreeToEarn, 
          link: "/free-to-earn" 
        },
        { 
          title: "RANKING", 
          icon: Ranking, 
          link: "/ranking" 
        },
        { 
          title: "VIDEO-NFT", 
          icon: Video, 
          link: "/video-nft" 
        },
        { 
          title: "HOW TO BUY", 
          icon: Horse, 
          link: "/how-to-buy" 
        },
        { 
          title: "NEW NFTS", 
          icon: New, 
          link: "/new-nfts",
          isNew: true 
        },
        { 
          title: "ROADMAPS", 
          icon: Plane, 
          link: "/roadmaps" 
        },
      ];
    return (
        <div className="bg-[#1F2023]">
            <div className="container mx-auto max-w-[1128px]">
                <div className="flex justify-between items-center md:gap-4 gap-1 md:py-[23.94px] py-4">
                    {features?.map((feature, index) => {
                        return (
                            <Link href={feature.link} key={index} className="group">
                                <div className="px-2 md:px-0 flex flex-col justify-center md:gap-y-3 text-center relative">
                                    <Image src={feature.icon} alt="" height={42} className='object-contain mx-auto mb-2'/>
                                    <p className='font-normal text-[10px] md:text-[14px] uppercase text-white'>{feature.title}</p>
                                    {feature.isNew && (
                                        <div className="absolute -top-2 right-1/4 bg-[#FF0000] text-white text-xs font-medium px-[6px] py-[2px] rounded-[4px]">
                                            NEW
                                        </div>
                                    )}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}