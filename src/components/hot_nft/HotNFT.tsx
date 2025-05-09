import Link from "next/link";
import logo from "../../assets/hot_nft/hot_nft.png";
import Image from "next/image";
export const HotNFT = () => {
    const hotNfts = [
        {
          id: 1,
          title: "Hot NFT",
          image: logo,
          link: "/nft/hot-nft"
        },
      ];
    return (
        <section className="card__hot-nft h-full">
            {hotNfts?.map((itm) => {
                return (
                     <Link href={itm?.link} key={itm?.id}>
                        <h5 className="title font-black text-[#FFC700] uppercase italic md:text-[32px] text-2xl mb-2">
                            {itm?.title}
                        </h5>
                        <Image className='md:w-full md:h-[241px] h-auto' src={logo} alt=""/>
                    </Link>
                )
            })}
           
        </section>
    )
}