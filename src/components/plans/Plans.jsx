import React from "react";
import PlanceCard from "./PlanceCard";
import { IoIosCheckboxOutline } from "react-icons/io";
import { LiaWindowCloseSolid } from "react-icons/lia";

const Plans = () => {
  return (
    <section className="px-1 py-[80px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center pb-[60px]">
          <h4 className="text-[#7968EF] text-[24px] font-medium pb-[14px]">
            Our pricing
          </h4>
          <h3 className="text-[48px] font-semibold text-[#29313D]">
            Premium optimization plans
          </h3>
        </div>
        <div className="flex  flex-wrap ">
          <div className="lg:w-[25%] sm:pb-8 sm:w-full lg:pb-0 pb-5 w-full md:w-[50%]">
            <PlanceCard
              bordercolorClassName="border-r-1 border-[#D7E6F9]"
              headingoneClassName="md:w-[300px] sm:text-center lg:w-auto"
              headingTextOne="Save "
              headingTextTwo="up to 40% "
              headingTextThree="by paying annually!"
              topborderClassName="bg-[#64BAFF]"
              texttwo="keywords result"
              textTwoClassName="sm:text-center md:text-start lg:text-start"
              textThree="Territories"
              textThreeClassName="sm:text-center md:text-start lg:text-start"
              textFour="Search by time"
              textFourClassName="sm:text-center md:text-start lg:text-start"
              textFive="Api access"
              textFiveClassName="sm:text-center md:text-start lg:text-start"
              textSix="competition metrics"
              textSixClassName="sm:text-center md:text-start lg:text-start"
              textSeven="Reports"
              textSevenClassName="sm:text-center md:text-start lg:text-start"
            />
          </div>
          <div className="lg:w-[25%] sm:pb-10 md:pb-10 lg:pb-0 pb-10 sm:w-full w-full md:w-[50%]">
            <PlanceCard
              bordercolorClassName="lg:border-r-1 lg:border-[#D7E6F9]"
              headingoneClassName="text-center flex flex-col font-semibold"
              headingTextTwo="Free"
              headingtwoClassName="text-[#29313D] font-normal"
              headingTextOne="Personal"
              topborderClassName="bg-[#323232]"
              texttwo="Top 1,000"
              textTwoClassName="text-center"
              textThree="Top 6"
              textThreeClassName="text-center"
              textFour={<IoIosCheckboxOutline />}
              textFourClassName="flex justify-center pt-9 text-green-500 pb-8"
              textFive={<LiaWindowCloseSolid />}
              textFiveClassName="flex justify-center pt-9 text-red-500 pb-8"
              textSix={<IoIosCheckboxOutline />}
              textSixClassName="flex justify-center pt-9 text-green-500 pb-8"
              btnText="Try for free"
              btnClassName="bg-[#323232] hover:bg-sky-400 duration-300"
              textSeven={<IoIosCheckboxOutline />}
              textSevenClassName="flex justify-center pt-9 text-green-500 pb-8"
            />
          </div>
          <div className="lg:w-[25%] sm:pb-10 lg:pb-0 pb-10 sm:w-full w-full md:w-[50%]">
            <PlanceCard
              bordercolorClassName="border-r-1 border-[#D7E6F9]"
              headingTextOne="Professional"
              headingoneClassName="font-semibold text-center flex flex-col "
              headingTextTwo="$59/monthly"
              headingtwoClassName="text-[#29313D] font-normal"
              topborderClassName="bg-[#43CB83]"
              texttwo="5,000"
              textTwoClassName="text-center"
              textThree="13"
              textThreeClassName="text-center"
              textFour={<IoIosCheckboxOutline />}
              textFourClassName="flex justify-center pt-9 text-green-500 pb-8"
              textFive={<LiaWindowCloseSolid />}
              textFiveClassName="flex justify-center pt-9 text-red-500 pb-8"
              textSix={<IoIosCheckboxOutline />}
              textSixClassName="flex justify-center pt-9 text-green-500 pb-8"
              btnText="Buy now"
              btnClassName="bg-[#43CB83] hover:bg-sky-400 duration-300"
              textSeven={<IoIosCheckboxOutline />}
              textSevenClassName="flex justify-center pt-9 text-green-500 pb-8"
            />
          </div>
          <div className="lg:w-[25%]  sm:w-full w-full md:w-[50%]">
            <PlanceCard
              headingTextOne="Enterprice"
              topborderClassName="bg-[#845A9F]"
              headingoneClassName="font-semibold text-center flex flex-col "
              headingTextTwo="$59/monthly"
              headingtwoClassName="text-[#29313D] font-normal"
              texttwo="10,000"
              textTwoClassName="text-center text-[#29313D] "
              textThree="200+"
              textThreeClassName="text-center"
              textFour={<IoIosCheckboxOutline />}
              textFourClassName="flex justify-center pt-9 text-green-500 pb-8"
              textFive={<IoIosCheckboxOutline />}
              textFiveClassName="flex justify-center pt-9 text-green-500 pb-8"
              textSix={<IoIosCheckboxOutline />}
              textSixClassName="flex justify-center pt-9 text-green-500 pb-8"
              btnText="Buy now"
              btnClassName="bg-[#845A9F] hover:bg-sky-400 duration-300"
              textSeven={<IoIosCheckboxOutline />}
              textSevenClassName="flex justify-center pt-9 text-green-500 pb-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
