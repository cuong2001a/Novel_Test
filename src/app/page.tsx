import { Hero } from "@/components/Hero/hero";
import { NFTCollection } from "@/components/NFTCollection/nFTCollection";
import { NFTDropCalendar } from "@/components/NFTDropCalendar/nFTDropCalendar";
import { Banner } from "@/components/banner/Banner";
import FooterComponent from "@/components/footer/Footer";
import { HeaderComponent } from "@/components/header/Header";
import { HotNFT } from "@/components/hot_nft/HotNFT";
import { Promotions } from "@/components/promotions/Promotion";

export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <Banner/>
      <Hero/>
      <NFTCollection/>
      <div className="container mx-auto max-w-[1128px] md:my-20 my-10">
      <div className="grid grid-cols-12 gap-6 px-5 md:px-0">
        <div className="md:col-span-7 col-span-12">
         <NFTDropCalendar/>
        </div>
        <div className="md:col-span-5 col-span-12">
          <div className="flex h-full items-center gap-6">
          <HotNFT/>
          <Promotions/>
          </div>
        </div>
      </div>
      </div>
      <FooterComponent/>
    </>
  );
}
