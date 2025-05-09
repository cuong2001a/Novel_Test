import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/promotion/promotion.png';
export const Promotions = () => {
    const promotion = [
        {
            id: 1,
            title: "Promotion",
            image: logo,
            link: "/nft/promotion"
          },
    ]
    return (
        <section className="card__hot-nft h-full">
        {promotion?.map((itm) => {
            return (
                <Link href={itm?.link} key={itm?.id}>
                    <h5 className="title font-black text-[#FFC700] italic uppercase md:text-[32px] text-2xl mb-2">
                        {itm?.title}
                    </h5>
                    <Image className='md:w-full md:h-[241px] h-auto' src={logo} alt=""/>
                </Link>
            )
        })}
    </section>
    )
}