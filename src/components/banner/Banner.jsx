import React from "react";
import bannerimg from "../../assets/bannerimg.png";
import ban1 from "../../assets/ban1.png";
import ban2 from "../../assets/ban2.png";
import ban3 from "../../assets/ban3.png";
import ban4 from "../../assets/ban4.png";
import ban5 from "../../assets/ban5.png";
import "./banner.css";

const Banner = () => {
  return (
    <section className="overflow-hidden "> 
      <div
        className="py-[0px] pb-10 lg:pb-0 bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${bannerimg})` }}
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center textmaindiv  md:pt-[100px] sm:pt-[200px] lg:pt-[200px] lg:pb-[0px]">
            <div className="flex justify-center gap-3 text-white">
              <button className="border-1 border-whte py-[10px] px-[15px] rounded-[5px]">
                SEO
              </button>
              <button className="border-1 border-whte py-[10px] px-[15px] rounded-[5px]">
                SMM
              </button>
              <button className="border-1 border-whte py-[10px] px-[15px] rounded-[5px]">
                SRO
              </button>
            </div>
            <h1 className="text-white pt-[30px] leading-[130%] pb-[20px] md:text-[40px] sm:text-[50px] text-[45px] lg:text-[64px] mx-auto font-bold lg:w-[850px]">
              Guaranteed increase of your website sales
            </h1>
            <p className="text-white text-[18px] pb-[48px] leading-[200%] mx-auto font-normal lg:w-[750px]">
              With over 25 years of experience, we have crafted thousands of
              strategic discovery process that enables us to peel back the
              layers which enable us to understand.
            </p>

            <div className="lg:block md:block sm:block justify-center flex">
              <input
                className="py-[30px] px-3 text-[16px] font-normal focus:outline-none rounded-l-[15px] text-black bg-white md:pl-[20px] lg:pl-[30px] lg:pr-[227px]"
                type="text"
                placeholder="paste your website links"
              />
              <button className="lg:py-[30px] md:py-[25] sm:py-[30px] rounded-r-[15px] px-4 md:px-[25px] sm:px-[25px] lg:px-[30px] bg-[#6A55EA]">
                Analyze website
              </button>
            </div>
          </div>
          
        </div>
      <div className="sm:hidden banall xs:hidden md:hidden lg:block relative">
        <img className="w-full bg-cover bg-no-repeat" src={ban1} alt="" />
        <img className="w-full animaone absolute top-0 left-0 bg-cover bg-no-repeat" src={ban2} alt="" />
        <img className="w-full animatwo absolute top-21 left-0 bg-cover bg-no-repeat" src={ban3} alt="" />
        <img className="w-[300px] rocket absolute top-[-300px] right-0 bg-cover bg-no-repeat" src={ban4} alt="" />
        <img className="w-[150px] roundani  absolute top-[-460px] opacity-20 left-50  bg-cover bg-no-repeat" src={ban5} alt="" />
        
      </div>
      </div>
   
    </section>
  );
};

export default Banner;
