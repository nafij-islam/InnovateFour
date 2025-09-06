import React from "react";
import seoimg from "../../assets/seoimg.png";

const Seo = () => {
  return (
    <section className="pt-[60px] pb-20 px-2">
      <div className="max-w-[1320px] mx-auto">
        <div
          className="bg-cover bg-no-repeat bg-center md:rounded-[20px] sm:rounded-[10px]  lg:rounded-[40px]"
          style={{ backgroundImage: `url(${seoimg})` }}
        >
          <div className="text-center pt-[123px]">
            <h2 className="text-[48px] text-white font-semibold pb-[10px]">
              Get your free seo analytics
            </h2>
            <p className="text-[18px] font-normal pb-[28px] text-[#ffffff8d] lg:w-[560px] mx-auto">
              Paste your website link to get the free 7 days analytics of your
              website for totaly free
            </p>
          </div>
          <div className="flex justify-center pb-7 lg:pb-[100px]">
            <input
              className="py-[30px] px-3 text-[16px] font-normal focus:outline-none rounded-l-[15px] text-black bg-white md:pl-[20px] lg:pl-[30px] p lg:pr-[227px]"
              type="text"
              placeholder="paste your website links"
            />
            <button className="lg:py-[30px] md:py-[25] sm:py-[30px] rounded-r-[15px] px-2 md:px-[25px] sm:px-[25px] lg:px-[30px] bg-[#6A55EA]">
              Analyze website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo;
