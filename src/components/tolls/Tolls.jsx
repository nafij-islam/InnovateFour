import React from "react";
import tollsimg from "../../assets/tollosimg.png";
import tolicon1 from "../../assets/tollicon1.png";
import tolicon2 from "../../assets/tolicon2.png";
import tolicon3 from "../../assets/tolicon3.png";
import './tolls.css'

const Tolls = () => {
  return (
    <section className="lg:py-10">
      <div className="max-w-[1320px] mx-auto">
        <div>
          <h3 className="text-[#7968EF] text-[24px] font-medium text-center">
            Core feature
          </h3>
          <h2 className="text-[#29313D] leading-[140%] lg:pb-[60px] text-[48px] lg:w-[600px] mx-auto font-semibold text-center">
            Provide awsome service with our tools
          </h2>
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="lg:w-[48%] md:w-full">
            <div> 
              <p className="text-[17px] lg:text-start lg:w-full pt-[37px]    font-normal text-center leading-[200%] pb-[90px]">
                With over 25 years of experience, we have crafted thousands of
                strategic discovery process that enables us to peel back the
                layers which enable us to understand.
              </p>
              <img className="md:flex md:mx-auto" src={tollsimg} alt="" />
            </div>
          </div>
          <div className="lg:w-[48%] w-full sm:w-full md:w-full lg:pt-0 pt-20 px-3 lg:px-0 sm:pt-20">
            <div className="flex  tolls-card-main flex-col gap-[36px]">
              <div className="bg-[#F0EDFF] rounded-[20px] flex gap-[40px] py-[36px] pl-[36px]">
                <div>   
                  <img src={tolicon1} alt="" />
                </div>
                <div>
                  <h3 className="pb-[12px] font-semibold md:text-[25px] lg:text-[28px]">
                    SEO Consultancy
                  </h3>
                  <p className="lg:w-[300px]">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque{" "}
                  </p>
                </div>
              </div>
              <div className="bg-[#FEF6EC] rounded-[20px] flex gap-[40px] py-[36px] pl-[36px]">
                <div>
                  <img src={tolicon2} alt="" />
                </div>
                <div>
                  <h3 className="pb-[12px] font-semibold md:text-[25px] lg:text-[28px]">
                    Competitor analysis
                  </h3>
                  <p className="lg:w-[300px]">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque{" "}
                  </p>
                </div>
              </div>

              <div className="bg-[#E8FCF2] rounded-[20px] flex gap-[40px] py-[36px] pl-[36px]">
                <div>
                  <img src={tolicon3} alt="" />
                </div>
                <div>
                  <h3 className="pb-[12px] md:text-[25px] font-semibold lg:text-[28px]">
                    Social media marketing
                  </h3>
                  <p className="lg:w-[300px]">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Tolls;
